import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { Col, ListGroup, Row } from "react-bootstrap";
import AssignmentGroupControlButtons from "./AssignmentGroupControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-5">
      <div>
        {/* Header */}
        <AssignmentsControls />
        <br /><br /><br />

        <ListGroup className="rounded-0" id="wd-assignment-list">

          <ListGroup.Item className="wd-assignment-list-item p-0 mb-5 fs-5">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> <b>ASSIGNMENTS</b> <AssignmentGroupControlButtons />
            </div>

            <ListGroup className="wd-lessons rounded-0">

              {/* Assignment 1 */}
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="wd-flex-row">

                  <div className="d-flex align-items-center justify-content-center me-3 float-start" >
                    <BsGripVertical className="me-2 fs-3" />
                    <LuNotebookPen className="fs-3 text-success" />
                  </div>

                  <div className="flex-grow-1 wd-assignment-details">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                      A1 - ENV + HTML
                    </a>
                    <br />

                    <div className="fs-6">
                      <span style={{color: "#b52828"}}  >Multiple Modules </span>
                      <span> | <b>Not available until</b> </span>
                      <span className="wd-assignment-available-date"> May 6 at 12:00am |</span>
                      <br />

                      <span><b>Due</b></span>
                      <span className="wd-assignment-due-date"> May 13 at 11:59pm </span>
                      <span> | </span>
                      <span className="wd-assignment-points"> 100 pts</span>
                    </div>

                  </div>

                  <div className="d-flex align-items-center justify-content-center float-end" >
                    <AssignmentControlButtons />
                  </div>
                </div>
              </ListGroup.Item>



              {/* Assignment 2 */}
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="wd-flex-row">

                  <div className="d-flex align-items-center justify-content-center me-3 float-start" >
                    <BsGripVertical className="me-2 fs-3" />
                    <LuNotebookPen className="fs-3 text-success" />
                  </div>

                  <div className="flex-grow-1 wd-assignment-details">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                      A2 - CSS + BOOTSTRAP
                    </a>
                    <br />

                    <div className="fs-6">
                      <span style={{color: "#b52828"}}>Multiple Modules </span>
                      <span> | <b>Not available until</b> </span>
                      <span className="wd-assignment-available-date"> May 13 at 12:00am |</span>
                      <br />

                      <span><b>Due</b></span>
                      <span className="wd-assignment-due-date"> May 20 at 11:59pm </span>
                      <span> | </span>
                      <span className="wd-assignment-points"> 100 pts</span>
                    </div>

                  </div>

                  <div className="d-flex align-items-center justify-content-center float-end" >
                    <AssignmentControlButtons />
                  </div>
                </div>
              </ListGroup.Item>




              {/* Assignment 3 */}
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="wd-flex-row">

                  <div className="d-flex align-items-center justify-content-center me-3 float-start" >
                    <BsGripVertical className="me-2 fs-3" />
                    <LuNotebookPen className="fs-3 text-success" />
                  </div>

                  <div className="flex-grow-1 wd-assignment-details">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                      A3 - JAVASCRIPT + REACT
                    </a>
                    <br />

                    <div className="fs-6">
                      <span style={{color: "#b52828"}}>Multiple Modules </span>
                      <span> | <b>Not available until</b> </span>
                      <span className="wd-assignment-available-date"> May 20 at 12:00am |</span>
                      <br />

                      <span><b>Due</b></span>
                      <span className="wd-assignment-due-date"> May 27 at 11:59pm </span>
                      <span> | </span>
                      <span className="wd-assignment-points"> 100 pts</span>
                    </div>

                  </div>

                  <div className="d-flex align-items-center justify-content-center float-end" >
                    <AssignmentControlButtons />
                  </div>
                </div>
              </ListGroup.Item>





            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
