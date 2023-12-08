import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

import styles from "./projects.module.scss";

const items = [
  { image: "/images/1.png", status: "inspection" },
  { image: "/images/1.png", status: "inspection" },
  { image: "/images/1.png", status: "maintenance" },
  { image: "/images/1.png", status: "inspection" },
  { image: "/images/1.png", status: "inspection" },
  { image: "/images/1.png", status: "maintenance" },
];

const ProjectsSection = () => {
  const [activeButton, setActiveButton] = useState("all");

  const filteredItems =
    activeButton === "all"
      ? items
      : items.filter((item) => item.status === activeButton);

  const handleButtonClick = (status) => {
    setActiveButton(status);
  };

  return (
    <Container className={styles.project}>
      <Row>
        <Col className={styles.infoCol}>
          <p className="section-title-small">our projects</p>
          <p className="section-title-big">Projects</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={0} sm={0} xs={0}></Col>
        <Col lg={4} md={12} className={styles.filtersCol}>
          <div
            style={{
              color: activeButton === "all" ? "var(--orange)" : "white",
              textDecoration: activeButton === "all" ? "underline" : "",
            }}
            onClick={() => handleButtonClick("all")}
          >
            All
          </div>
          <div
            style={{
              color: activeButton === "inspection" ? "var(--orange)" : "white",
              textDecoration: activeButton === "inspection" ? "underline" : "",
            }}
            onClick={() => handleButtonClick("inspection")}
          >
            Inspection
          </div>
          <div
            style={{
              color: activeButton === "maintenance" ? "var(--orange)" : "white",
              textDecoration: activeButton === "maintenance" ? "underline" : "",
            }}
            onClick={() => handleButtonClick("maintenance")}
          >
            Maintenance
          </div>
        </Col>
        <Col lg={4} md={0} sm={0} xs={0}></Col>
      </Row>
      <Row>
        {filteredItems.map((item, index) => (
          <Col lg={4} md={6} key={index} className={styles.projectsCol}>
            <Image
              width={500}
              height={500}
              alt="icon"
              src={item.image}
              className={styles.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsSection;
