import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addNewCourse, deleteCourse, setCourse, updateCourse } from "./Courses/reducer";
import { useEffect, useState } from "react";
import { addEnrollment, removeEnrollment } from "./Courses/People/reducer";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";


export default function Dashboard() {
  const [showAll, setShowAll] = useState(false);

  // Only used for display 
  const [coursesFromServer, setCoursesFromServer] = useState<any[]>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { course } = useSelector((state: any) => state.coursesReducer);

  const dispatch = useDispatch();

  const createNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);

    // Add course to redux
    dispatch(addNewCourse(newCourse));

    // Locally add the new enrollment (since not updated with database)
    const instructorEnrollment = {
      "user": currentUser._id,
      "course": newCourse._id,
    };
    dispatch(addEnrollment(instructorEnrollment));

    // Update display
    fetchCoursesAndCoursesUserIsIn();
  }

  const deleteCourseHelper = async (courseId: string) => {
    // Have server delete the course
    const status = await courseClient.deleteCourse(courseId);
    if (status) {
      // Success
      // Delete locally
      dispatch(deleteCourse(courseId));
    } else {
      console.error("Error deleting a course");
    }

    fetchCoursesAndCoursesUserIsIn();
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

    fetchCoursesAndCoursesUserIsIn();
  };

  const fetchCoursesAndCoursesUserIsIn = async () => {
    try {
      const serverCoursesEnrolledIn = await userClient.findMyCourses();
      setCoursesFromServer(serverCoursesEnrolledIn);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCoursesAndCoursesUserIsIn();
  }, [currentUser]);


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role == "FACULTY" &&
        <div>
          <h5>
            New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={createNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourseHelper} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />

          <FormControl value={course.name} className="mb-2" onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))} />
          <FormControl value={course.description} as="textarea" rows={3} onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value }))} />
          <hr />
        </div>
      }

      <h2 id="wd-dashboard-published">
        Published Courses
        {/* Number of courses */}
        ({coursesFromServer.filter((c: any) =>
          c.isEnrolled || showAll
        ).length})

        {currentUser.role !== "FACULTY" &&
          <Button variant="primary" size="lg" className="me-1 float-end" id="wd-add-assignment-group" onClick={() => setShowAll(!showAll)}>
            Enrollments
          </Button>
        }

      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {coursesFromServer.filter((c: any) => c.isEnrolled || showAll
          ).map((c: any) => (
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

                    {currentUser.role === "FACULTY" ?
                      <div>
                        <Button variant="primary">Go</Button>

                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourseHelper(c._id);
                          // dispatch(deleteCourse(c._id));
                        }} className="btn btn-danger float-end" id="wd-delete-course-click">
                          Delete
                        </button>

                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(setCourse(c));
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>
                      </div>
                      :
                      // Not faculty, dispaly enrollments
                      <div className="d-flex">
                        {/* If the user is enrolled in the class */}
                        {c.isEnrolled
                          ?
                          <button className="btn btn-danger flex-grow-1" id="wd-unenroll-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(removeEnrollment({
                                "user": currentUser._id,
                                "course": c._id,
                              }))
                              // TODO fetch?
                            }}>
                            Unenroll
                          </button>
                          :
                          <button className="btn btn-success flex-grow-1" id="wd-enroll-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              dispatch(addEnrollment({
                                "user": currentUser._id,
                                "course": c._id,
                              }))
                              // TODO fetch?
                            }}>
                            Enroll
                          </button>
                        }
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
