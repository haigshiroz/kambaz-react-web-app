import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { deleteAssignment, setAssignment } from "./reducer";
import { useNavigate } from "react-router";

export default function AssignmentLink(
    { assignment }: {
        assignment: {
            _id: string;
            title: string;
            course: string;
            date_available: Date;
            date_due: Date;
            date_until: Date;
            points: number;
            description: string;
            assignment_group: any;
            display_grade_as: any;
            submission_type: any;
        };
    }) {

    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();


    const openAssignment = () => {
        if (currentUser.role === "FACULTY") {
            dispatch(setAssignment(assignment));
            navigate(`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`);
        }
    }

    return (
        <ListGroup.Item className="wd-lesson p-3 ps-1">
            <div className="wd-flex-row">

                <div className="d-flex align-items-center justify-content-center me-3 float-start" >
                    {currentUser.role === "FACULTY" &&
                        <BsGripVertical className="me-2 fs-3" />
                    }
                    <LuNotebookPen className="fs-3 text-success" />
                </div>

                <div className="flex-grow-1 wd-assignment-details">

                    <span className="wd-assignment-link" onClick={openAssignment}>
                        {assignment.title}
                    </span>
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
                        <AssignmentControlButtons deleteAssignment={() => dispatch(deleteAssignment(assignment._id))} />
                    }
                </div>
            </div>
        </ListGroup.Item>
    );
}