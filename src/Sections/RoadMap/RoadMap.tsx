import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./RoadMap.css";
import MediaQuery from "react-responsive";
import { THEME } from "../../const";
import Text from "../../Components/Text/Text";
import roadmap from "./Img/roadmap.png";
const timelineList = [
  {
    title: "New Year's Eve 2021",
    text: (
      <>
        On 12/31 (New Year's Eve 2021), we will drop the LinksDAO Membership
        NFTs. These NFTs will allow for community access, governance, a wide
        variety of perks, and games in the near term. They will be the key to
        unlock membership at LinksDAO's first golf & leisure club.
      </>
    ),
  },
  {
    title: "Early 2022",
    text: (
      <>
        In early 2022, the LinksDAO community will organize into a DAO tasked
        with creating the club of our collective dreams and identifying the
        first course to acquire and create that experience.
      </>
    ),
  },
  {
    title: "Mid 2022",
    text: (
      <>
        In mid-2022, the LinksDAO community will support the acquisition of one
        of the world's greatest golf courses. Know which course we should buy?
        Join the Discord and tell us.
      </>
    ),
  },
  {
    title: "Late 2022 - Early 2023",
    text: (
      <>
        In late 2022 and early 2023, the community will open the first LinksDAO
        Club location.
      </>
    ),
  },
  {
    title: "2023 & Beyond",
    text: (
      <>
        In 2023 and beyond, the LinksDAO community will expand to additional
        locations and begin to create a global membership and IRL community that
        rivals, yet redefines, all membership clubs that have come before.
      </>
    ),
  },
];
export default function RoadMap() {
  return (
    <section style={{ backgroundColor: "#A2FF8D" }} id="roadmap">
      <Container className="pt-5 pb-5">
        <div>
          <Text color={THEME.BLACK} h2 bold text="Roadmap" />
        </div>
        <Row>
          <Col lg={7} md={12}>
            {timelineList.map(({ title, text }) => {
              return (
                <>
                  <div className="pt-4">
                    <Text color={THEME.BLACK} extraBold regular text={title} />
                  </div>
                  <Text color={THEME.BLACK} small text={text} />
                </>
              );
            })}
          </Col>
          <MediaQuery minWidth={992}>
            <Col lg={5} md={12}>
              <img style={{ maxWidth: "100%" }} src={roadmap} />
            </Col>
          </MediaQuery>
        </Row>
      </Container>
    </section>
  );
}
