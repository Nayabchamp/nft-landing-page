import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    <section style={{ backgroundColor: "#A2FF8D" }}>
      <div className="   pb-5" id="roadmap">
        <div className="pt-5 ">
          <MediaQuery maxWidth={1168}>
            <div style={{ paddingLeft: "10vh", marginBottom: "-1.5vh" }}>
              <Text color={THEME.BLACK} h2 bold text="Roadmap" />
            </div>
          </MediaQuery>
        </div>
        <Container>
          <Row className="mrgnBottom">
            <MediaQuery minWidth={1169}>
              <Col lg={6}>
                <Row className="align-items-center">
                  <Col lg={5}>
                    <div className="pb-5">
                      <Text color={THEME.BLACK} h2 bold text="Roadmap" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}></Col>
            </MediaQuery>
          </Row>
        </Container>
        {/* <VerticalTimeline animate={false} className="mb-5 pb-5">
          {timelineList.map(({ title, text }) => {
            return (
              <>
                <VerticalTimelineElement
                  position=""
                  style={{ marginTop: "100px" }}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "transparent", color: "black" }}
                  contentArrowStyle={{ borderRight: "7px solid  BLACK" }}
                  iconStyle={{
                    background: "BLACK",
                    color: "BLACK",
                    marginTop: "0px",
                  }}>
                  <div className="pb-2 text-end">
                    <Text color={THEME.BLACK} regular text={title} />
                  </div>

                  <Text color={THEME.BLACK} small text={text} />
                </VerticalTimelineElement>
              </>
            );
          })}
        </VerticalTimeline> */}
        <Container>
          <Row>
            <Col lg={7}>
              {timelineList.map(({ title, text }) => {
                return (
                  <>
                    <div className="pt-4">
                      <Text
                        color={THEME.BLACK}
                        extraBold
                        regular
                        text={title}
                      />
                    </div>
                    <Text color={THEME.BLACK} small text={text} />
                  </>
                );
              })}
            </Col>
            <Col lg={5}>
              <img style={{ maxWidth: "100%" }} src={roadmap} />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
