import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

import styles from "./LandingBanner.module.scss";

const LandingBanner = () => {
  const bannerData = [
    { image: "/images/solar.svg", title: "solar systems" },
    { image: "/images/electricity.svg", title: "Electrical Services" },
    { image: "/images/plumbing.svg", title: "plumbing solutions" },
    { image: "/images/carpentry.svg", title: "carpentry fixing" },
  ];
  return (
    <div style={{ marginTop: "-48px" }}>
      <Container>
        <Row className={styles.banner}>
          {bannerData.map((item, index) => (
            <Col
              lg={3}
              md={6}
              sm={6}
              xs={6}
              className={styles.bannerCol}
              key={index}
            >
              <Image width={90} height={90} alt="image" src={item.image} />
              <p className={styles.bannerTitle}>{item.title}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LandingBanner;
