import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { THEME } from "../../const";
import Text from "../Text/Text";
export default function Footer() {
  const socialLinks = [
    {
      text: "Twitter",
      icon: (
        <AiOutlineTwitter
          color={THEME.WHITE}
          size={60}
          style={{ marginRight: "13px" }}
        />
      ),
      href: "https://mobile.twitter.com/",
    },
    {
      text: "Youtube",
      icon: (
        <AiFillYoutube
          color={THEME.WHITE}
          size={60}
          style={{ marginRight: "13px" }}
        />
      ),
      href: "https://www.youtube.com/",
    },
    {
      text: "Discord",
      icon: (
        <SiDiscord
          color={THEME.WHITE}
          size={60}
          style={{ marginRight: "13px" }}
        />
      ),
      href: "https://discord.com/",
    },
  ];
  return (
    <>
      <section style={{ backgroundColor: "#00ADD5" }} className=" pt-4 pb-4">
        <Container className="pt-4 pb-3">
          <Row className=" align-items-center justify-content-center ">
            {socialLinks.map(({ text, icon, href }) => {
              return (
                <>
                  <Col lg={3} md={4} sm={4}>
                    <a href={href} style={{ textDecoration: "none" }}>
                      <div className="d-flex text-center justify-content-center">
                        {icon}
                        <Text
                          className="pt-3"
                          small
                          color={THEME.WHITE}
                          text={text}
                        />
                      </div>
                    </a>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}
