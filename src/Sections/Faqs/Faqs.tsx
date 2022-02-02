import react from "react";
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
  ];
  return (
    <>
      <Container className="pt-5 pb-5  mb-5">
        <div id="faq">
          <Text color={THEME.WHITE} bold h2 text="FAQs" />
        </div>
        <Row>
          <Col>
            {faq.map(({ title, text }) => {
              return (
                <>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <Text bold regular text={title} />
                      </Accordion.Header>
                      <Accordion.Body>{text}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}
