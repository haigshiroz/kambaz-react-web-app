import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CourseBackdrop1.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>



        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CourseBackdrop3.png" width={200} />
            <div>
              <h5> CS4120</h5>
              <p className="wd-dashboard-course-title">
                Natural Language Processing  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>



        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CourseBackdrop2.png" width={200} />
            <div>
              <h5> CS1210 </h5>
              <p className="wd-dashboard-course-title">
                Professional Development Co-op  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>



        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CourseBackdrop4.png" width={200} />
            <div>
              <h5> CS3650 </h5>
              <p className="wd-dashboard-course-title">
                Computer Systems  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>



        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CourseBackdrop5.png" width={200} />
            <div>
              <h5> CS3800 </h5>
              <p className="wd-dashboard-course-title">
                Theory of Computation  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>



        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CourseBackdrop6.png" width={200} />
            <div>
              <h5> CS4550 </h5>
              <p className="wd-dashboard-course-title">
                Web Development  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>



        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CourseBackdrop7.png" width={200} />
            <div>
              <h5> CS5100 </h5>
              <p className="wd-dashboard-course-title">
                Foundations of AI  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>



      </div>
    </div>
);}
