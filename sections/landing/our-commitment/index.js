import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import styles from "./ourCommitment.module.scss";

const OurCommitment = ({title, text}) => {
  return (
    <>
      <Container className={styles.commitment} id="our-commitment">
        <Row>
          <Col className={styles.infoCol}>
            <p className="section-title-big">{title}</p>
            <div
              className="section-text"
              style={{ fontSize: "18px", textAlign: "center" }}
            >
              {text}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OurCommitment;
