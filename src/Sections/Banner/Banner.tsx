import { Col, Container, Row } from "react-bootstrap";

import { THEME } from "../../const";
import Text from "../../Components/Text/Text";
import card from "./Img/card.gif";
import "./Banner.css";
import ConnectWalletButton from "../../ConnectWalletButton";

export default function Banner() {
  return (
    <>
      <section
        id="home"
        className="responsiveBanner"
        style={{
          backgroundColor: "black",
        }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="resptextalign">
              <h1
                className="respBannertext"
                style={{
                  fontSize: "95px",
                  fontFamily: "Inter-ExtraBold",

                  color: `${THEME.WHITE}`,
                }}>
                A NEW ERA IN GOLF
              </h1>
              <Text
                regular
                color="white"
                text="LinksDAO is creating the modern golf & leisure club. A global community of thousands of enthusiasts has come together to create one of the world's greatest golf clubs - and reimagine the country club."
              />

              <div className="pt-4">
                <ConnectWalletButton />
              </div>
            </Col>
            <Col lg={5} className=" pt-5  ">
              <div className="cardAlign">
                <img style={{ maxWidth: "90%" }} src={card} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
