import { Col, Container, Row } from "react-bootstrap";

import { THEME } from "../../const";
import { MintButton } from "../../MintButton";

import card from "./Img/card.gif";
import "./Banner.css";

export default function Banner() {
  return (
    <>
      <section
        id="home"
        style={{
          // paddingTop: "18vw",
          // paddingBottom: "8vw",
          paddingTop: "180px",
          paddingBottom: "8vw",
          backgroundColor: "rgb(4 208 255 / 15%)",
        }}>
        <Container className="">
          <Row className="text-center">
            <Col lg={12}>
              <p
                className="respBannertext"
                style={{
                  fontSize: "6.5rem",
                  fontFamily: "Inter-ExtraBold",

                  color: `${THEME.BLACK}`,
                  letterSpacing: "10px",
                  lineHeight: "60px",
                }}>
                Metacard
              </p>

              <div className="pt-4">
                <MintButton
                  onMint={function (): Promise<void> {
                    throw new Error("Function not implemented.");
                  }}
                  isMinting={false}
                />
              </div>
            </Col>
            <Col lg={12} className=" pt-5">
              <img src={card} style={{ maxWidth: "100%", marginRight: "" }} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
