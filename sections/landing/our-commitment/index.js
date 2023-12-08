import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import WhyChooseUs from "../why-choose-us";

import styles from "./ourCommitment.module.scss";

const OurCommitment = () => {
  return (
    <>
      <Container className={styles.commitment} id="our-commitment">
        <Row>
          <Col className={styles.infoCol}>
            <p className="section-title-big">our commitment title</p>
            <div
              className="section-text"
              style={{ fontSize: "18px", textAlign: "center" }}
            >
              text area text area text area text areatext area text area text
              area text area text areatext area text area
            </div>
          </Col>
        </Row>
      </Container>
      <WhyChooseUs />
    </>
  );
};

export default OurCommitment;
