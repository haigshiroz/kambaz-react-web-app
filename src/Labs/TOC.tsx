import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();

  return (
    <Nav variant="pills" id="wd-toc">

      {/* NOTE: In Chapter 3, the "Labs" pill is no longer present but there was no explicit mention of removing it */}
      {/* <Nav.Item>
        <Nav.Link href="#/Labs">
          Labs
        </Nav.Link>
      </Nav.Item> */}

      <Nav.Item>
        <Nav.Link href="#/Labs/Lab1" id="wd-a1" active={pathname.includes("Lab1")}>
          Lab 1
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#/Labs/Lab2" id="wd-a2" active={pathname.includes("Lab2")}>
          Lab 2
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#/Labs/Lab3" id="wd-a3" active={pathname.includes("Lab3")}>
          Lab 3
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="#/Kambaz">
          Kambaz
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="https://github.com/haigshiroz/kambaz-react-web-app" id="wd-github">
          My GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

