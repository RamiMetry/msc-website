import Link from "next/link";
import React from "react";
import { Container, Row } from "react-bootstrap";

import styles from "./pageBanner.module.scss";

const PageBanner = ({ image, title, routingText1, routingText2, routing1 }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.bannerGradient}>
        <Container className={styles.bannerCont}>
          <Row className={styles.bannerDetails}>
            <p className={styles.bannerTitle}>{title}</p>
            <div className={styles.routingDiv}>
              <Link href="/" className={styles.routingLink}>
                <p>Home {">"} </p>
              </Link>
              {routingText1 && routing1 && (
                <Link href={routing1} className={styles.routingLink}>
                  <p>
                    {routingText1} {">"}
                  </p>
                </Link>
              )}

              <p className={styles.routingText}> {routingText2}</p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PageBanner;
