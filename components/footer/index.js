import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import Socials from "../socials";
import FooterArticleCard from "../footer-article-card";
import Loader from "../loader/loader";

import styles from "./footer.module.scss";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <Container>
        <Row className={styles.linksRow}>
          <Col
            lg={4}
            className={styles.linksCol}
            style={{ alignItems: "center" }}
          >
            <Link href="/">
              <Image
                width={100}
                height={100}
                className={styles.mainLogo}
                alt="icon"
                src="/images/msc-logo.svg"
              />
            </Link>
            <p className={styles.linksTitle} style={{ marginBottom: "0" }}>
              Address
            </p>
            <p className={styles.text}>Beirut, Lebanon</p>
            <div>
              <Socials
                facebook="url"
                instagram="url"
                linkedin="url"
                twitter="url"
              />
            </div>
          </Col>
          <Col
            lg={4}
            className={styles.linksCol}
            style={{ alignItems: "center" }}
          >
            <p className={styles.linksTitle}>quick links</p>
            <div className={styles.linkList}>
              <ul>
                <Link href="/#aboutUs" className={styles.footerLink}>
                  <li>About Us</li>
                </Link>
                <Link href="/#services" className={styles.footerLink}>
                  <li>Services</li>
                </Link>
                <Link href="/#our-commitment" className={styles.footerLink}>
                  <li>Our Commitment</li>
                </Link>
                <Link
                  href={`mailto:email@msc.com?subject=hello`}
                  className={styles.footerLink}
                >
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className={styles.rightsRow}>
          {/* ///cms */}
          <div className={styles.copyright}>
            &copy; {currentYear} MSC. All Rights Reserved.
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
