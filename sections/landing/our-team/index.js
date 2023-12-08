import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import TeamMemberCard from "@/components/team-member-card";

import styles from "./team.module.scss";

const OurTeam = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(/images/background.jpg)`,
      }}
    >
      <div className={styles.gradient}>
        <Container className={styles.team}>
          <Row>
            <Col className={styles.infoCol}>
              <p className="section-title-small">our team</p>
              <p className="section-title-big">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <p className="section-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className={styles.servicesCol}>
              <TeamMemberCard />
            </Col>
            <Col lg={4} md={6}>
              <TeamMemberCard />
            </Col>
            <Col lg={4} md={12} className={styles.servicesCol}>
              <TeamMemberCard />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OurTeam;
