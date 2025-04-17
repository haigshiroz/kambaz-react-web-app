import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./style.css"
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { setCourses, addNewCourse, deleteCourse, setCourse, updateCourse } from "./Courses/reducer";


export default function Kambaz() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { course, courses } = useSelector((state: any) => state.coursesReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const dispatch = useDispatch();

  const findCoursesForUser = async () => {
    try {
      let courses = await userClient.findCoursesForUser(currentUser._id);
      courses = courses.map((c: any) => {return {...c, enrolled: true}});
      console.log("Setting courses - 31");
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();

      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );

      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });

      console.log("Setting courses - 54");
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };


  const addNewCourseHelper = async () => {
    const newCourse = await courseClient.createCourse(course);
    dispatch(addNewCourse([...courses, newCourse]));
  };


  const deleteCourseHelper = async (courseId: string) => {
    // Unenrolls everyone from the course
    const status = await courseClient.deleteCourse(courseId);

    if (status) {
      dispatch(deleteCourse(courseId));
      console.log("Deleted course");
    } else {
      console.error("Error deleting a course");
    }
  };

  const updateCourseHelper = async () => {
    // Have server update the course
    const status = await courseClient.updateCourse(course);

    if (status) {
      // Success
      // Update locally
      dispatch(updateCourse());
    } else {
      console.error("Error updating a course");
    }
  };

  const setCourseHelper = async (newCourse: any) => {
    dispatch(setCourse(newCourse))
  }


  const updateEnrollmentHelper = async (courseId: string, enrolled: boolean) => {
    // Either enroll or unenroll the user from the given course
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }

    //Update the courses
    const newCourses = courses.map((c: any) => {
      if (c._id === courseId) {
        return { ...c, enrolled: enrolled };
      } else {
        return c;
      }
    });

    console.log("Setting courses - 115");
    dispatch(setCourses(newCourses));
  };


  const isFaculty = () => {
    if (currentUser) {
      return currentUser.role === "FACULTY";
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);


  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            {/* Implies /Kambaz in the front (?) */}
            <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={
              <ProtectedRoute>
                <Dashboard courses={courses} course={course} setCourse={setCourseHelper}
                  addNewCourse={addNewCourseHelper} deleteCourse={deleteCourseHelper} updateCourse={updateCourseHelper}
                  enrolling={enrolling} setEnrolling={setEnrolling} isFaculty={isFaculty()} updateEnrollment={updateEnrollmentHelper} />
              </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            } />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}