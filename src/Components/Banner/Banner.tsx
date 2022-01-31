import { motion } from "framer-motion";
import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import Text from "../../Components/Text/Text";

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
          paddingTop: "12vw",
          paddingBottom: "8vw",
        }}>
        <Container
          style={{
            backgroundColor: `${THEME.LIGHTBLUE}`,
            paddingRight: "0px",
            paddingLeft: "40px",
          }}
          className="pt-5 ">
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ x: "-2vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "just",
                  duration: 2,
                }}>
                <p
                  style={{
                    fontSize: "65px",
                    fontFamily: "AvertaStd-ExtraBold",
                    lineHeight: "60px",
                    color: "white",
                  }}>
                  The New NFTs Marketplace
                </p>
              </motion.div>
              <motion.div
                initial={{ x: "2vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "just",
                  duration: 1.5,
                }}>
                {" "}
                <Text
                  color={THEME.WHITE}
                  small
                  bold
                  text="We spread awareness about the SGDs. Our team of unique specialist are making a world better place."
                />
              </motion.div>
              <motion.div
                initial={{ y: "2vw" }}
                animate={{ y: 0 }}
                transition={{
                  type: "just",
                  duration: 2,
                }}>
                <div className="pt-4">
                  <MintButton
                    onMint={function (): Promise<void> {
                      throw new Error("Function not implemented.");
                    }}
                    isMinting={false}
                  />
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="text-end">
              <motion.div
                initial={{ x: "3vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "just",
                  duration: 2,
                }}>
                <img
                  src={graphic}
                  style={{ maxWidth: "75%", marginRight: "-40px" }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
