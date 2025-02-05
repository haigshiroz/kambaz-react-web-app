import { Button, Col, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { IoIosClose } from "react-icons/io";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="px-5">

      <FormGroup className="mb-4" controlId="wd-name" >
        <FormLabel>Assignment Name</FormLabel>
        <FormControl type="text" defaultValue="A1 - ENV + HTML" id="wd-name" />
      </FormGroup>

      <FormControl type="text" as="textarea" id="wd-description" className="mb-4" rows={5}
        defaultValue={"The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbaz application Links to all relevant source code repositories The Kanbaz application should include a link to navigate back to the landing page."}
      />

      <div id="wd-assignment-editor-table">
        <FormGroup as={Row} className="d-flex flex-row mb-4" controlId="wd-assignment-points" >
          <Col xs={2}>
            <FormLabel className="pe-3 float-end">
              Points
            </FormLabel>
          </Col>
          <Col xs={10}>
            <FormControl type="text" defaultValue="100" id="wd-points" />
          </Col>
        </FormGroup>

        <FormGroup as={Row} className="d-flex flex-row mb-4" controlId="wd-group" >
          <Col xs={2}>
            <FormLabel className="pe-3 float-end">
              Assignment Group
            </FormLabel>
          </Col>
          <Col xs={10}>
            <FormSelect id="wd-group">
              <option selected value="ASSIGNMENTS">Assignments</option>
              <option value="QUIZZES">Quizzes</option>
              <option value="EXAM">Exam</option>
              <option value="PROJECT">Project</option>
            </FormSelect>
          </Col>
        </FormGroup>

        <FormGroup as={Row} className="d-flex flex-row mb-4" controlId="wd-display-grade-as" >
          <Col xs={2}>
            <FormLabel className="pe-3 float-end">
              Display Grade As
            </FormLabel>
          </Col>
          <Col xs={10}>
            <FormSelect id="wd-display-grade-as">
              <option selected value="PERCENTAGE">Percentage</option>
              <option value="COMPLETENE_INCOMPLETE">Complete/Incomplete</option>
              <option value="POINTS">Points</option>
              <option value="LETTER_GRADE">Letter Grade</option>
              <option value="GPA_SCALE">GPA Scale</option>
              <option value="NOT_GRADED">Not Graded</option>
            </FormSelect>
          </Col>
        </FormGroup>

        <FormGroup as={Row} className="d-flex flex-row mb-4" controlId="wd-submission-type" >
          <Col xs={2}>
            <FormLabel className="pe-3 float-end">
              Submission Type
            </FormLabel>
          </Col>
          <Col xs={10}>
            <div className="border rounded p-4">
              <FormSelect className="me-1 mb-4" id="wd-submission-type">
                <option value="NO_SUBMISSION">No Submission</option>
                <option selected value="ONLINE">Online</option>
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
                  <FormControl type="datetime-local" className="ms-2" id="wd-due-date" defaultValue={"2024-05-13T23:59"}>
                  </FormControl>
                </FormGroup>
              </div>



              {/* Availability */}
              <div className="wd-availability mb-4">
                <Row>
                  <Col className="float-start me-1">
                    <FormGroup as={Row} className="" controlId="wd-available-from">
                      <FormLabel className="wd-available-from"> <b>Available From</b> </FormLabel>
                      <FormControl type="datetime-local" className="ms-2" id="wd-available-from" defaultValue={"2024-05-06T00:01"}>
                      </FormControl>
                    </FormGroup>
                  </Col>

                  <Col className="float-start ms-1">
                    <FormGroup as={Row} className="" controlId="wd-available-until">
                      <FormLabel className="wd-available-until"> <b>Until</b> </FormLabel>
                      <FormControl type="datetime-local" className="mb-4 ms-2" id="wd-available-until" defaultValue={""}>
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
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-save-assignment">
              Save
            </Button>

            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-cancel-assignment">
              Cancel
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
}
