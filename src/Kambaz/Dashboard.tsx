import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { addNewCourse, deleteCourse, setCourse, updateCourse } from "./Courses/reducer";

export default function Dashboard() {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  const { courses, course } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role == "FACULTY" &&
        <div>
          <h5>
            New Course
            <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={() => dispatch(addNewCourse())}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={() => dispatch(updateCourse())} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />

          <FormControl value={course.name} className="mb-2" onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))} />
          <FormControl value={course.description} as="textarea" rows={3} onChange={(e) => dispatch(setCourse({ ...course, description: e.target.value }))} />
          <hr />
        </div>
      }

      <h2 id="wd-dashboard-published">Published Courses ({courses.filter((c: any) =>
        enrollments.some((enrollment) =>
          enrollment.user === currentUser._id &&
          enrollment.course === c._id
        )).length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">

          {courses.filter((c: any) =>
            enrollments.some(
              (enrollment) =>
                enrollment.user === currentUser._id &&
                enrollment.course === c._id
            )).map((c: any) => (
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

                      {currentUser.role == "FACULTY" &&

                        <div>
                          <Button variant="primary">Go</Button>

                          <button onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(c._id));
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
