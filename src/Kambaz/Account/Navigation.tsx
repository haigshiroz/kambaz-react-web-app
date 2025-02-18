import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const links = ["Signin", "Signup", "Profile"];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item key={link} as={Link} to={`/Kambaz/Account/${link}`}
          className={`className="list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
          {link}
        </ListGroup.Item>
      ))}
    </div>
  );
}
