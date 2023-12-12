import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

import styles from "./details-banner.module.scss";

const DetailsBanner = ({ price, phone}) => {
  const bannerData = [
    { image: "/images/price.svg", title: `${price}$ per hour` },
    { image: "/images/24.svg", title: "24 hours support" },
    { image: "/images/phone2.svg", title: phone },
  ];
  return (
    <div>
      <Container>
        <Row className={styles.banner}>
          {bannerData.map((item, index) => (
            <Col
              lg={4}
              md={4}
              sm={12}
              xs={12}
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

export default DetailsBanner;
