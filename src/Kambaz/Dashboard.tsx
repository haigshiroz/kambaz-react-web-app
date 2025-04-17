import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { setCourses, addNewCourse, deleteCourse, setCourse, updateCourse } from "./Courses/reducer";
// import { useEffect, useState } from "react";
// import { setEnrollments, addEnrollment, removeEnrollment } from "./Courses/People/reducer";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";
// import * as enrollmentClient from "./Courses/People/client";


export default function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, enrolling, setEnrolling, isFaculty, updateEnrollment}:
  {
    courses: any;
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: () => void;
    enrolling: boolean; 
    setEnrolling: (enrolling: boolean) => void;
    isFaculty: boolean;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
  }
) {




  // Only used for display 
  // const [coursesFromServer, setCoursesFromServer] = useState<any[]>([]);

  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { course } = useSelector((state: any) => state.coursesReducer);

  // const dispatch = useDispatch();

  // Gets all courses, the current courses this user is in, and all enrollments 
  // const fetchCoursesAndCoursesUserIsInAndEnrollments = async () => {
  //   try {
  //     const serverAllCourses = await courseClient.fetchAllCourses();
  //     dispatch(setCourses(serverAllCourses));

  //     // What textbook wants us to do
  //     // setCoursesFromServer(serverAllCourses);

  //     const serverCoursesEnrolledIn = await userClient.findMyCourses();
  //     setCoursesFromServer(serverCoursesEnrolledIn);

  //     const enrollments = await enrollmentClient.getEnrollments();
  //     dispatch(setEnrollments(enrollments)) ;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchCoursesAndCoursesUserIsInAndEnrollments();
  // }, [currentUser]);

  // const createNewCourse = async () => {
  //   const newCourse = await courseClient.createCourse(course);

  //   // Add course to redux
  //   dispatch(addNewCourse(newCourse));

  //   // Locally add the new enrollment (since not updated with database)
  //   const instructorEnrollment = {"user": currentUser._id, "course": newCourse._id,};
  //   dispatch(addEnrollment(instructorEnrollment));

  //   // Update display
  //   fetchCoursesAndCoursesUserIsInAndEnrollments();
  // }

  // const deleteCourseHelper = async (courseId: string) => {
  //   // Have server delete the course
  //   const status = await courseClient.deleteCourse(courseId);
  //   if (status) {
  //     // Success
  //     // Delete locally
  //     dispatch(deleteCourse(courseId));
  //   } else {
  //     console.error("Error deleting a course");
  //   }

  //   fetchCoursesAndCoursesUserIsInAndEnrollments();
  // };

  // const updateCourseHelper = async () => {
  //   // Have server update the course
  //   const status = await courseClient.updateCourse(course);

  //   if (status) {
  //     // Success
  //     // Update locally
  //     dispatch(updateCourse());
  //   } else {
  //     console.error("Error updating a course");
  //   }

  //   fetchCoursesAndCoursesUserIsInAndEnrollments();
  // };

  // const createEnrollmentHelper = async (userId: string, courseId: string) => {
  //   await enrollmentClient.createEnrollment(userId, courseId);
  //   dispatch(addEnrollment({"user": userId, "course": courseId}));

  //   fetchCoursesAndCoursesUserIsInAndEnrollments();
  // }

  // const removeEnrollmentHelper = async (userId: string, courseId: string) => {
  //   await enrollmentClient.deleteEnrollment(userId, courseId);
  //   dispatch(removeEnrollment({"user": userId, "course": courseId}));

  //   fetchCoursesAndCoursesUserIsInAndEnrollments();
  // }


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 
      <hr />
      {isFaculty &&
        <div>
          <h5>
            New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />

          <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description} as="textarea" rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </div>
      }

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})

        {!isFaculty &&
          <Button variant="primary" size="lg" className="me-1 float-end" id="wd-add-assignment-group" onClick={() => setEnrolling(!enrolling)}>
            {enrolling ? "My Courses" : "All Courses"}
          </Button>
        }

      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((c: any) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }} key={c._id}>
              <Card>
                <Link to={`/Kambaz/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <Card.Img variant="top" src={c.image_src} width="100%" height={160} />

                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </Card.Title>

                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {c.description}
                    </Card.Text>

                    {isFaculty ?
                      <div>
                        <Button variant="primary">Go</Button>

                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(c._id);
                          // dispatch(deleteCourse(c._id));
                        }} className="btn btn-danger float-end" id="wd-delete-course-click">
                          Delete
                        </button>

                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(c);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </div>
                      :
                      // Not faculty, dispaly enrollments
                      <div className="d-flex">
                        <button onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(c._id, !c.enrolled);
                        }}
                          className={`btn ${c.enrolled ? "btn-danger" : "btn-success"} float-end flex-grow-1`} >
                          {c.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      </div>
                    }

                  </Card.Body>

                </Link>
              </Card>
            </Col>
          ))}

        </Row>
      </div>
    </div>
  );
}
