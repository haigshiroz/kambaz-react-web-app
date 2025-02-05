import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl placeholder="username" className="wd-username mb-2" />
      <FormControl placeholder="password" type="password" className="wd-password mb-2" />
      <FormControl placeholder="verify password" type="password" className="wd-password-verify mb-2" />

      <Link id="wd-signup-btn" to="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>

      <Link id="wd-signin-link" to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}
