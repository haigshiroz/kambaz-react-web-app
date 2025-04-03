import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { ListGroup } from "react-bootstrap";
import AssignmentGroupControlButtons from "./AssignmentGroupControlButtons";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import AssignmentLink from "./AssignmentLink";
import { setAssignments, newAssignment } from "./reducer";
import * as coursesClient from "../client";
import { useEffect } from "react";


export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignment, assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();


  // const fetchAssignments = async () => {
  //   const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
  //   dispatch(setAssignments(assignments));
  // };

  // useEffect(() => {
  //   fetchAssignments();
  // }, []);


  const createNewAssignment = () => {
    dispatch(newAssignment(cid));
    navigate(`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`)
  }

  return (
    <div id="wd-assignments" className="p-3">
      {/* Header */}
      <AssignmentsControls newAssignment={createNewAssignment} />
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
              <AssignmentGroupControlButtons newAssignment={createNewAssignment} />
            }
          </div>

          {/* List of assignments in that "module" */}
          <ListGroup className="wd-lessons rounded-0">

            {assignments.map((assignment: any) => (
              <AssignmentLink assignment={assignment} key={cid + "," + assignment._id} />
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
