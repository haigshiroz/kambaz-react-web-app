import { Button, Col, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, setAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";


export default function AssignmentEditor() {
  const { assignment, assignments } = useSelector((state: any) => state.assignmentsReducer);

  const dispatch = useDispatch();

  const [title, setTitle] = useState(assignment.title);
  const [dateAvailable, setDateAvailable] = useState(assignment.date_available);
  const [dateDue, setDateDue] = useState(assignment.date_due);
  const [dateUntil, setDateUntil] = useState(assignment.date_until);
  const [points, setPoints] = useState(assignment.points);
  const [description, setDescription] = useState(assignment.description);
  const [group, setGroup] = useState(assignment.assignment_group);
  const [displayGradeAs, setDisplayGradeAs] = useState(assignment.display_grade_as);
  const [submissionType, setSubmissionType] = useState(assignment.submission_type);

  const saveAssignment = async () => {
    // Construct new assignment from useState
    const newAssignment = {
      "_id": assignment._id,
      "title": title,
      "course": assignment.course,
      "date_available": dateAvailable,
      "date_due": dateDue,
      "date_until": dateUntil,
      "points": points,
      "description": description,
      "assignment_group": group,
      "display_grade_as": displayGradeAs,
      "submission_type": submissionType,
    }

    // const assignments = await coursesClient.findAssignmentsForCourse(assignment.course as string);

    let serverAssignmentResult = null;

    // Check if the assignment is in the current list. If not, add it to the end
    if (assignments.find((a: any) => a._id === assignment._id) === undefined) {
      // New assignment - POST
      serverAssignmentResult = await coursesClient.createAssignmentForCourse(assignment.course, newAssignment);
      dispatch(addAssignment(newAssignment)); // Add the assignment to local list of assignments
    } else {
      // Existing assignment - PUT
      serverAssignmentResult = await assignmentsClient.updateAssignment(newAssignment);
      dispatch(updateAssignment(newAssignment)); // Update the assignment in the local list of assignments
    }

    dispatch(setAssignment(serverAssignmentResult)); // Set the assignment as the "focal" one (i.e. being edited)
  }


  return (
    <div id="wd-assignments-editor" className="px-5">

      {/* Assignment Name */}
      <FormGroup className="mb-4" controlId="wd-name" >
        <FormLabel>Assignment Name</FormLabel>
        <FormControl type="text" value={title} id="wd-name" onChange={(e) => { setTitle(e.target.value); }} />
      </FormGroup>

      {/* Assignment description */}
      <FormControl type="text" as="textarea" id="wd-description" className="mb-4" rows={5}
        value={description} onChange={(e) => { setDescription(e.target.value); }}
      />


      {/* Number of points */}
      <div id="wd-assignment-editor-table">
        <FormGroup as={Row} className="d-flex flex-row mb-4" controlId="wd-assignment-points" >
          <Col xs={2}>
            <FormLabel className="pe-3 float-end">
              Points
            </FormLabel>
          </Col>
          <Col xs={10}>
            <FormControl type="text" value={points} onChange={(e) => { setPoints(e.target.value); }} id="wd-assignment-points" />
          </Col>
        </FormGroup>

        {/* Group */}
        <FormGroup as={Row} className="d-flex flex-row mb-4" controlId="wd-group" >
          <Col xs={2}>
            <FormLabel className="pe-3 float-end">
              Assignment Group
            </FormLabel>
          </Col>
          <Col xs={10}>
            <FormSelect id="wd-group" value={group} onChange={(e) => { setGroup(e.target.value); }}>
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="QUIZZES">Quizzes</option>
              <option value="EXAM">Exam</option>
              <option value="PROJECT">Project</option>
            </FormSelect>
          </Col>
        </FormGroup>

        {/* Display Grade As */}
        <FormGroup as={Row} className="d-flex flex-row mb-4" controlId="wd-display-grade-as" >
          <Col xs={2}>
            <FormLabel className="pe-3 float-end">
              Display Grade As
            </FormLabel>
          </Col>
          <Col xs={10}>
            <FormSelect id="wd-display-grade-as" value={displayGradeAs} onChange={(e) => { setDisplayGradeAs(e.target.value); }}>
              <option value="PERCENTAGE">Percentage</option>
              <option value="COMPLETENE_INCOMPLETE">Complete/Incomplete</option>
              <option value="POINTS">Points</option>
              <option value="LETTER_GRADE">Letter Grade</option>
              <option value="GPA_SCALE">GPA Scale</option>
              <option value="NOT_GRADED">Not Graded</option>
            </FormSelect>
          </Col>
        </FormGroup>

        {/* Submission Type */}
        <FormGroup as={Row} className="d-flex flex-row mb-4" controlId="wd-submission-type" >
          <Col xs={2}>
            <FormLabel className="pe-3 float-end">
              Submission Type
            </FormLabel>
          </Col>
          <Col xs={10}>
            <div className="border rounded p-4">
              <FormSelect className="me-1 mb-4" id="wd-submission-type" value={submissionType} onChange={(e) => { setSubmissionType(e.target.value); }}>
                <option value="NO_SUBMISSION">No Submission</option>
                <option value="ONLINE">Online</option>
                <option value="ON_PAPER">On Paper</option>
                <option value="EXTERNAL_TOOL">External Tool</option>
                <option value="LUCID">Lucid</option>
              </FormSelect>

              <div className="wd-submission-specific-details">
                <FormGroup as={Row} className="ms-1" controlId="wd-check-submission-type">
                  <FormLabel className="mb-4 check-submission-type"> <b>Online Entry Options</b> </FormLabel>
                  <FormCheck className="wd-check-submission-type mb-4" id="wd-text-entry" label="Text Entry" />
                  <FormCheck className="wd-check-submission-type mb-4" id="wd-website-url" label="Website URL" />
                  <FormCheck className="wd-check-submission-type mb-4" id="wd-media-recordings" label="Media Recordings" />
                  <FormCheck className="wd-check-submission-type mb-4" id="wd-student-annotation" label="Student Annotation" />
                  <FormCheck className="wd-check-submission-type mb-4" id="wd-file-upload" label="File Uploads" />
                </FormGroup>
              </div>

            </div>
          </Col>
        </FormGroup>


        {/* Assign To */}
        <FormGroup as={Row} className="d-flex flex-row mb-4" controlId="wd-assign-to" >
          <Col xs={2}>
            <FormLabel className="pe-3 float-end">
              Assign
            </FormLabel>
          </Col>
          <Col xs={10}>
            <div className="border rounded p-4 pe-5">
              {/* Assign To */}
              <div className="wd-assign-to mb-4">
                <FormGroup as={Row} className="" controlId="wd-assign-to">
                  <FormLabel className="wd-assign-to"> <b>Assign To</b> </FormLabel>
                  <div className="border ms-2 p-3">
                    <div className="wd-student-to-assign-to bg-secondary p-1 ps-2 d-inline-flex">
                      <span className="">Everyone</span>
                      <IoIosClose className="fs-4" />
                    </div>
                  </div>
                </FormGroup>
              </div>



              {/* Due Date */}
              <div className="wd-due-date mb-4 ">
                <FormGroup as={Row} className="" controlId="wd-due-date">
                  <FormLabel className="wd-due-date"> <b>Due</b> </FormLabel>
                  <FormControl type="datetime-local" className="ms-2" id="wd-due-date" value={dateDue} onChange={(e) => { setDateDue(e.target.value); }}>
                  </FormControl>
                </FormGroup>
              </div>



              {/* Availability */}
              <div className="wd-availability mb-4">
                <Row>
                  <Col className="float-start me-1">
                    <FormGroup as={Row} className="" controlId="wd-available-from">
                      <FormLabel className="wd-available-from"> <b>Available From</b> </FormLabel>
                      <FormControl type="datetime-local" className="ms-2" id="wd-available-from" value={dateAvailable} onChange={(e) => { setDateAvailable(e.target.value); }}>
                      </FormControl>
                    </FormGroup>
                  </Col>

                  <Col className="float-start ms-1">
                    <FormGroup as={Row} className="" controlId="wd-available-until">
                      <FormLabel className="wd-available-until"> <b>Until</b> </FormLabel>
                      <FormControl type="datetime-local" className="mb-4 ms-2" id="wd-available-until" value={dateUntil} onChange={(e) => { setDateUntil(e.target.value); }}>
                      </FormControl>
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </FormGroup>
        <hr />
        <Row className="float-end">
          <div id="wd-control-assignment-editor" className="text-nowrap">
            <Button as={Link as any} onClick={saveAssignment} to={`/Kambaz/Courses/${assignment.course}/Assignments/`} variant="danger" size="lg" className="me-1 float-end" id="wd-save-assignment">
              Save
            </Button>

            <Button as={Link as any} to={`/Kambaz/Courses/${assignment.course}/Assignments/`} variant="secondary" size="lg" className="me-1 float-end" id="wd-cancel-assignment">
              Cancel
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
}
