import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import * as client from "./client";


export default function Courses() {
  const { courses } = useSelector((state: any) => state.coursesReducer);

  const { cid } = useParams();
  const course = courses.find((course: any) => course._id === cid);
  const { pathname } = useLocation();

  const [usersForCourse, setUsersForCourse] = useState<any[]>([]);

  const fetchPeopleForCourse = async () => {
    // const users = await client.findPeopleForCourse(cid);
    const users = await client.findUsersForCourse(cid!);
    setUsersForCourse(users);
  };

  useEffect(() => {
    fetchPeopleForCourse();
  }, []);

  const breadcrumb = () => {
    const split = pathname.split("/");
    const separator = " > "
    let ret = ""

    if (course) {
      ret = course.name + separator + split[4]
      if (split[5]) {
        ret += separator + split[5]
      }
    }

    return ret
  }

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />

        {/* Breadcrumb */}
        {breadcrumb()}
      </h2>

      <hr />

      {/* Display course if found */}
      {course ?
        <div className="d-flex">
          {/* Navigation tab on the left */}
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>

          {/* Actual course content on the right */}
          <div className="flex-fill">
            <Routes>
              {/* Implied /Kambaz/Courses/# */}
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h2>Piazza</h2>} />
              <Route path="Zoom" element={<h2>Zoom</h2>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Quizzes" element={<h2>Quizzes</h2>} />
              <Route path="People" element={<PeopleTable users={usersForCourse}/>} />
            </Routes>
          </div>
        </div>
        :
        <div> Course not found. </div>}

    </div>
  );
}
