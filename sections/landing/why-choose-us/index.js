import React from "react";
import { Container, Col, Row, Accordion } from "react-bootstrap";

import styles from "./why-choose-us.module.scss";

const WhyChooseUs = ({
  small_title,
  title,
  text,
  faq,
}) => {
  const whyUsData = [
    {
      title: "title1",
      text: " text area text area text area text areatext area text area text area text area text areatext area text area text area text area text areatext area text area text area",
    },
    {
      title: "title2",
      text: " text area text area text area text areatext area text area text area text area text areatext area text area text area text area text areatext area text area text area",
    },
    {
      title: "title3",
      text: " text area text area text area text areatext area text area text area text area text areatext area text area text area text area text areatext area text area text area",
    },
    {
      title: "title4",
      text: " text area text area text area text areatext area text area text area text area text areatext area text area text area text area text areatext area text area text area",
    },
    {
      title: "title5",
      text: " text area text area text area text areatext area text area text area text area text areatext area text area text area text area text areatext area text area text area",
    },
  ];
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} className={styles.infoCol}>
            <p className="section-title-small">{small_title}</p>
            <p className="section-title-big">{title}</p>

            <div className="section-text">
              {text}
            </div>
          </Col>
          <Col lg={6} className={styles.accCol}>
            <Accordion defaultActiveKey="0">
              {faq?.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>
                    <div>{item.answer}</div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
