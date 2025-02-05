import { FormControl, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl id="wd-username" placeholder="username" defaultValue="alice" className="mb-2" />
      <FormControl id="wd-password" placeholder="password" type="password" defaultValue="123" className="mb-2" />
      <FormControl id="wd-first-name" placeholder="first name" defaultValue="Alice" className="mb-2" />
      <FormControl id="wd-last-name" placeholder="last name" defaultValue="Wonderland" className="mb-2" />
      <FormControl type="date" id="wd-dob" defaultValue={""} className="mb-2" />
      <FormControl type="email" id="wd-email" placeholder="email" defaultValue={"alice@wonderland.com"} className="mb-2" />
      <FormSelect id="wd-role" defaultValue={"USER"} className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>


      <Link id="wd-signin-btn" to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2">
        Sign out
      </Link>
    </div>
  );
}



