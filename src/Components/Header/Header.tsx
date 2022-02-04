import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";
import logo from "./Img/logo.png";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Hamburger from "hamburger-react";

function Header() {
  let menu = [
    {
      title: <>Home</>,
      id: "/",
    },
    {
      title: <>Roadmap</>,
      id: "#roadmap",
    },
    {
      title: <>Faq</>,
      id: "#faq",
    },
  ];
  const [headerColor, setHeaderColor] = useState(false);

  const changebackground = () => {
    window.scrollY > 0 ? setHeaderColor(true) : setHeaderColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changebackground);
  });

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        fixed="top"
        className={headerColor ? "changeheader shadow" : "defaultheader "}>
        <Container>
          <Col xl={2} lg={2} md={3} sm={6} xs={6} id="zLogo">
            <Navbar.Brand href="#">
              {" "}
              <Image
                style={{ maxWidth: "100%" }}
                src={logo}
                className="logo"></Image>
            </Navbar.Brand>
          </Col>
          <Col xl={10} lg={10} md={9} sm={6} xs={6}>
            <Navbar.Toggle aria-controls="navbarScroll">
              <Hamburger color="black" />
            </Navbar.Toggle>

            <Navbar.Collapse id="navbarScroll">
              <Nav className="ml-auto my-lg-0  ">
                {menu.map(({ title, id }) => {
                  return (
                    <Nav.Link
                      href={id}
                      className="pl-6 ml-5"
                      style={{
                        fontFamily: "UbuntuMono-Bold",
                      }}>
                      <p
                        className="link"
                        style={{
                          padding: "0px",
                          margin: "0px",
                          marginRight: "20px",
                        }}>
                        {title}
                      </p>
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
