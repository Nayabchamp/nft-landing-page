import { Accordion, Col, Container, Row } from "react-bootstrap";
import Text from "../../Components/Text/Text";
import { THEME } from "../../const";

import "./Faqs.css";
interface Faqs {
  title?: any;
  text?: any;
}

export default function Faqs({ title, text }: Faqs) {
  const faq = [
    {
      title: <>What’s an NFT?</>,
      text: (
        <>
          An NFT stands for “Non-fungible token” and is a fancy way of saying
          it’s a unique, one-of-a-kind digital item that users can buy, own, and
          trade. Some NFTs main functions are to be digital art and look cool,
          some offer additional utility. Think of ours like a rare piece of art
          that can also act as a “members” card which gets you access to
          members-only perks.
        </>
      ),
    },
    {
      title: <>What will be the use of the Membership Card sale proceeds?</>,
      text: (
        <>
          The proceeds, net of taxes, will be used to fund DAO operations,
          including, but not limited to... Chief DAO Officer and operational
          leadership, including course scouting, financial and acquisition
          planning Product & engineering DAO infrastructure setup and fees
          Legal, compliance and accounting Marketing, partnerships and sales
          Community development Further initiatives as approved by the DAO
        </>
      ),
    },
    {
      title: (
        <>What governance rights will LinksDAO Membership Card holders have?</>
      ),
      text: (
        <>
          The proposal, approval, and execution of non-financial LinksDAO
          matters, including, but not limited to… Approval of LinksDAO
          functional operating committees Physical club selection process and
          approval, as proposed by the relevant operating committee Club rules,
          including culture, activities, design, and overall vision Club
          membership rules and admissions policies Marketing, partnerships and
          sales
        </>
      ),
    },
    {
      title: <>What are the terms of sale?</>,
      text: <>View the full Terms of Sale.</>,
    },
  ];
  return (
    <>
      <section style={{ backgroundColor: "#F6EDD1" }} className=" pb-4 ">
        <Container className="pt-5 pb-5 ">
          <div id="faq">
            <Text color={THEME.BLACK} extraBold h2 text="Faqs" />
          </div>
          <Row>
            <Col>
              {faq.map(({ title, text }) => {
                return (
                  <>
                    <div className="mt-4">
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <p
                              className="pt-2 pb-2"
                              style={{
                                margin: "0px",
                                fontFamily: "Inter-Regular",
                                fontSize: "20px",
                              }}>
                              {title}
                            </p>
                          </Accordion.Header>
                          <Accordion.Body>
                            {" "}
                            <Text color={THEME.BLACK} small text={text} />
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
