export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"> <b> Assignment Name </b> </label> <br /> 
        <br />
        <input id="wd-name" value="A1 - ENV + HTML" /> <br />
        <br />

        <textarea id="wd-description" cols={43} rows={9}>
            The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbaz application Links to all relevant source code repositories The Kanbaz application should include a link to navigate back to the landing page.
        </textarea> <br />
        <br />

        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                  <option selected value="ASSIGNMENTS">Assignments</option>
                  <option value="QUIZZES">Quizzes</option>
                  <option value="EXAM">Exam</option>
                  <option value="PROJECT">Project</option>
              </select>
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                  <option selected value="PERCENTAGE">Percentage</option>
                  <option value="COMPLETENE_INCOMPLETE">Complete/Incomplete</option>
                  <option value="POINTS">Points</option>
                  <option value="LETTER_GRADE">Letter Grade</option>
                  <option value="GPA_SCALE">GPA Scale</option>
                  <option value="NOT_GRADED">Not Graded</option>
              </select>
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                  <option value="NO_SUBMISSION">No Submission</option>
                  <option selected value="ONLINE">Online</option>
                  <option value="ON_PAPER">On Paper</option>
                  <option value="EXTERNAL_TOOL">External Tool</option>
                  <option value="LUCID">Lucid</option>
                  </select>
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
                {/* Empty column */}
            </td>
            <td>
              <span>Online Entry Options</span> <br />

              <input type="checkbox" name="check-submission-type" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label> <br/>
  
              <input type="checkbox" name="check-submission-type" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label> <br/>
  
              <input type="checkbox" name="check-submission-type" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label> <br/>
  
              <input type="checkbox" name="check-submission-type" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label> <br />

              <input type="checkbox" name="check-submission-type" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign To</label> <br />
              <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
              {/* Empty column */}
            </td>
            <td>
              <label htmlFor="wd-due-date">Due</label> <br />
              <input type="date" value="2024-05-13" id="wd-due-date"/>
            </td>
          </tr>
          <br />


          <tr>
            <td align="right" valign="top">
              {/* Empty column */}
            </td>
            <td>
              <table>
                <tr>
                  <td>
                    <label htmlFor="wd-available-from">Available from</label>
                  </td>
                  <td>
                    <label htmlFor="wd-available-until">Until</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="date" value="2024-05-06" id="wd-available-from"/>
                  </td>
                  <td>
                    <input type="date" value="2024-05-20" id="wd-available-until"/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <hr />

        <div align="right">
          <button>Cancel</button> <button>Save</button>
        </div>



      </div>
  );}
  