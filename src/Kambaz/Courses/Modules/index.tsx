export default function Modules() {
    return (
      <div>

        <button 
          type="button"
          // onClick={() => print("Collapse all")}
          className="wd-collapse-all">
          Collapse All
        </button> <button 
          type="button"
          // onClick={() => print("View Progress")}
          className="wd-view-progress">
            View Progress
        </button> <select id="wd-select-one-genre">
          <option selected value="PUB_ALL_M_I">Publish all modules and items</option>
          <option value="PUB_ALL_M">Publish modules only</option>
          <option value="UNPUB_ALL_M_I">Unpublish all modules and items</option>
          <option value="UNPUB_ALL_M">Unpublish modules only</option>
        </select> <button 
          type="button"
          // onClick={() => print("Add Module")}
          className="wd-add-module">
            + Module
        </button>

        <ul id="wd-modules">

          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>

                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating Us</li>
                </ul>

                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>


          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>

                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and Paragraphs   </li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>


          <li className="wd-module">
            <div className="wd-title">Week 3</div>
          </li>


        </ul>
      </div>
  );}
  