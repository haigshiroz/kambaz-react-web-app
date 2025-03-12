import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup } from "react-bootstrap";
import AssignmentGroupControlButtons from "./AssignmentGroupControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { assignments } from "../../Database";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();

  const { currentUser } = useSelector((state: any) => state.accountReducer);


  return (
    <div id="wd-assignments" className="p-3">
      {/* Header */}
      <AssignmentsControls />
      <br /><br /><br />

      {/* List of all "modules" */}
      <ListGroup className="rounded-0" id="wd-assignment-list">
        {/* "Module" item */}
        <ListGroup.Item className="wd-assignment-list-item p-0 mb-5 fs-5">
          {/* Header */}
          <div className="wd-title p-3 ps-2 bg-secondary">
            {currentUser.role === "FACULTY" &&
              <BsGripVertical className="me-2 fs-3" />
            }
            <b>ASSIGNMENTS</b>
            {currentUser.role === "FACULTY" &&
              <AssignmentGroupControlButtons />
            }
          </div>

          {/* List of assignments in that "module" */}
          <ListGroup className="wd-lessons rounded-0">


            {assignments.filter((assignment: any) => (assignment.course === cid)).map((assignment: any) => (

              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="wd-flex-row">

                  <div className="d-flex align-items-center justify-content-center me-3 float-start" >
                    {currentUser.role === "FACULTY" &&
                      <BsGripVertical className="me-2 fs-3" />
                    }
                    <LuNotebookPen className="fs-3 text-success" />
                  </div>

                  <div className="flex-grow-1 wd-assignment-details">
                    {currentUser.role === "FACULTY" ?
                      // Note: Not sure what to do if a non-faculty clicks on an assignment
                      <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                        {assignment.title}
                      </a> : <span className="wd-assignment-link">{assignment.title}</span>
                    }
                    <br />

                    <div className="fs-6">
                      <span style={{ color: "#b52828" }}> Multiple Modules </span>
                      <span> | <b>Not available until</b> </span>
                      <span className="wd-assignment-available-date">
                        {new Date(assignment.date_available).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span> | </span>
                      <span><b> Due </b></span>
                      <span className="wd-assignment-due-date">
                        {new Date(assignment.date_due).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span> | </span>
                      <span className="wd-assignment-points"> {assignment.points} pts</span>
                    </div>

                  </div>

                  <div className="d-flex align-items-center justify-content-center float-end" >
                    {currentUser.role === "FACULTY" &&
                      <AssignmentControlButtons />
                    }
                  </div>
                </div>
              </ListGroup.Item>


            ))}


            {/* End of list of assignments in that "module" */}
          </ListGroup>
          {/* End of "module" */}
        </ListGroup.Item>
        {/* End of list of "modules" */}
      </ListGroup>
    </div>
  );
}
