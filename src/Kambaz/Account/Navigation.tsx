import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item key={link} as={Link} to={`/Kambaz/Account/${link}`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
          {link}
        </ListGroup.Item>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kambaz/Account/Users`} className={`list-group-item border border-0 ${pathname.includes("Users") ? "active" : "text-danger"}`}> 
        Users 
        </Link>)}
    </div>
  );
}
