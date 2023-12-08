import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import SerciceCard from "@/components/service-card";

import styles from "./Services.module.scss";

const ServicesSection = ({title}) => {
  const servicesData = [
    {
      image: "/images/solar-purple.svg",
      title: "solar systems",
      description:
        "this id description 1 text area text area text areatext area text area text area text area text areatext area text area text",
    },
    {
      image: "/images/electricity-purple.svg",
      title: "Electrical Services",
      description:
        "this id description 2 text area text area text areatext area text area text area text area text areatext area text area text",
    },
    {
      image: "/images/plumbing-purple.svg",
      title: "plumbing solutions",
      description:
        "this id description 3 text area text area text areatext area text area text area text area text areatext area text area text",
    },
    {
      image: "/images/carpentry-purple.svg",
      title: "carpentry fixing",
      description:
        "this id description 4 text area text area text areatext area text area text area text area text areatext area text area text",
    },
  ];
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
            {servicesData.map((item, index) => (
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
