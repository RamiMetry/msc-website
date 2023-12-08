import React from "react";
import { Container, Col, Row, Accordion } from "react-bootstrap";

import styles from "./why-choose-us.module.scss";

const WhyChooseUs = () => {
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
            <p className="section-title-small">Why Choose Us section title</p>
            <p className="section-title-big">Why Choose Us title</p>

            <div className="section-text">
              text area text area text area text areatext area text area text
              area text area text areatext area text area text area text area
              text areatext area text area text area text area text areatext
              area text area text area text area text areatext area text area
              text area text area text areatext area text area text area text
              area text areatext area text area text area text area text
              areatext area text area text area text area text areatext area
              text area text area text area text areatext area text area text
              area text area text areatext area text area text area text area
              text areatext area
            </div>
          </Col>
          <Col lg={6} className={styles.accCol}>
            <Accordion defaultActiveKey="0">
              {whyUsData.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>
                    <div>{item.text}</div>
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
