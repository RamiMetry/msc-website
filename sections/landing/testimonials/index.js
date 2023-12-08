import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import TestimonialSectionCard from "@/components/testimonial-section-card";

import styles from "./testimonials.module.scss";

const items = [
  { image: "/images/1.png", url: "https://www.google.com" },
  { image: "/images/1.png", url: "https://www.google.com" },
  { image: "/images/1.png", url: "https://www.google.com" },
  { image: "/images/1.png", url: "https://www.google.com" },
];
const Testimonials = () => {
  return (
    <div className={styles.banner}>
      <Container>
        <Row>
          <Col
            lg={8}
            md={12}
            style={{
              paddingTop: "24px",
              paddingBottom: "24px",
            }}
          >
            <Row>
              <Col lg={6} md={12}>
                <p className={styles.title}>
                  Trust in our Expertise, Experience, and Dedication
                </p>
              </Col>
              <Col lg={6} md={0} sm={0} xs={0}></Col>
            </Row>
            <Row className={styles.custRow}>
              {items.map((item, index) => (
                <Col
                  lg={items.length > 6 && 3}
                  key={index}
                  style={{
                    marginTop: items.length > 6 && "18px",
                  }}
                >
                  <Link href={item.url}>
                    <Image
                      width={500}
                      height={300}
                      alt="icon"
                      src={item.image}
                      className={styles.image}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
            <Row>
              {[1, 2].map((index) => (
                <Col>
                  <TestimonialSectionCard />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={4} md={12} className={styles.testCol}>
            <p className="section-title-small">Testimonials</p>
            <p className="section-title-big">What Our Client Say</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Image
              width={64}
              height={64}
              alt="icon"
              src="/images/play.png"
              className={styles.playImage}
              onClick={() => {}}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
