import { motion } from "framer-motion";
import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import Text from "../../Components/Text/Text";
import bgImg from "./Img/bluebg.png";

import { THEME } from "../../const";
import { MintButton } from "../../MintButton";

import graphic from "./Img/card.gif";
interface Ibanner {
  title?: string;
  bottomBanner?: boolean;
  btnText?: string;
}
export default function Banner({}: Ibanner) {
  return (
    <>
      <section
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
                style={{
                  fontSize: "8rem",
                  fontFamily: "UbuntuMono-Bold",

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
              <img
                src={graphic}
                style={{ maxWidth: "100%", marginRight: "" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
