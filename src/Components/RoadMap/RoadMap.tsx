import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Text from "../Text/Text";
import "./RoadMap.css";
import MediaQuery from "react-responsive";
import { THEME } from "../../const";
const timelineList = [
  {
    title: "New Year's Eve 2021",
    text: (
      <>
        On 12/31 (New Year's Eve 2021), we will drop the LinksDAO Membership
        NFTs. These NFTs will allow for community access, governance, a wide
        variety of perks, and games in the near term.
      </>
    ),
  },
  {
    title: "Early 2022",
    text: (
      <>
        On 12/31 (New Year's Eve 2021), we will drop the LinksDAO Membership
        NFTs. These NFTs will allow for community access, governance, a wide
        variety of perks, and games in the near term.
      </>
    ),
  },
  {
    title: "Mid 2022",
    text: (
      <>
        On 12/31 (New Year's Eve 2021), we will drop the LinksDAO Membership
        NFTs. These NFTs will allow for community access, governance, a wide
        variety of perks, and games in the near term.
      </>
    ),
  },
];
export default function RoadMap() {
  return (
    <div className="mt-5  mb-5 pb-5">
      <div className="pt-5 ">
        <MediaQuery maxWidth={1168}>
          <div style={{ paddingLeft: "10vh", marginBottom: "-1.5vh" }}>
            <Text color={THEME.PRIMARY} text="Roadmap" />
          </div>
        </MediaQuery>
      </div>
      <Container>
        <Row className="mrgnBottom">
          <MediaQuery minWidth={1169}>
            <Col lg={6}>
              <Row className="align-items-center">
                <Col lg={5}>
                  <div className="">
                    <Text color={THEME.WHITE} h2 bold text="Roadmap" />
                  </div>
                </Col>

                <Col lg={7} className="p-0">
                  <div className="text-center borderr" />
                </Col>
              </Row>
            </Col>
            <Col lg={6}></Col>
          </MediaQuery>
        </Row>
      </Container>
      <VerticalTimeline className="mb-5 pb-5">
        {timelineList.map(({ title, text }) => {
          return (
            <>
              <VerticalTimelineElement
                position=""
                style={{ marginTop: "100px" }}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "transparent", color: "black" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                iconStyle={{
                  background: "white",
                  color: "white",
                  marginTop: "15px",
                }}>
                <div className="pt-2 pb-2">
                  <Text color={THEME.WHITE} small text={title} />
                </div>

                <Text color={THEME.WHITE} small text={text} />
              </VerticalTimelineElement>
            </>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
