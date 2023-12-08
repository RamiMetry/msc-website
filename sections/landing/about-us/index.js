import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

import styles from "./AboutUs.module.scss";

const AboutUsSection = ({title, text}) => {
  return (
    <div id="aboutUs">
      <Container>
        <Row className={styles.aboutUs}>
          <Col lg={6} className={styles.infoCol}>
            <p className="section-title-small">About Us</p>
            <p className="section-title-big">{title}</p>
            <div className="section-text">
              {text}
            </div>
          </Col>
          <Col lg={6} className={styles.imageCol}>
            <Image
              width={480}
              height={578}
              alt="image"
              src="/images/111.jpg"
              className={styles.image}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsSection;
