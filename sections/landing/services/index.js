import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import SerciceCard from "@/components/service-card";

import styles from "./Services.module.scss";

const ServicesSection = ({ title, services }) => {

  return (
    <div
      id="services"
      className={styles.wrapper}
      style={{
        backgroundImage: `url(/images/222.jpg)`,
      }}
    >
      <div className={styles.gradient}>
        <Container className={styles.services}>
          <Row>
            <Col className={styles.infoCol}>
              <p className="section-title-small">Our Services</p>
              <p className="section-title-big">{title}</p>
            </Col>
          </Row>
          <Row>
            {services?.map((item, index) => (
              <Col md={6} key={index} style={{ marginTop: "24px" }}>
                <SerciceCard data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ServicesSection;
