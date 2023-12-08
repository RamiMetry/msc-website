import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import AppHead from "@/components/app-head";
import PageBanner from "@/sections/page-banner";
import RecentArticles from "@/sections/recent-articles";
import MobileLink from "@/sections/mobile-link";
import Socials from "@/components/socials";

import styles from "./blog.module.scss";

const SingleBlog = () => {
  return (
    <>
      <AppHead
        title={`title} | M.S.C.`}
        description={`short_text`}
        url={`blog/slug`}
        image="/images/111.jpg"
      />

      <div className={styles.wrapper}>
        <PageBanner
          image="/images/plumbing.jpg"
          title="title"
          routingText1="Blog"
          routingText2="Single Blog"
          routing1="/blogs"
        />
        <Container>
          <Row>
            <Col lg={8} className={styles.detailsCol}>
              <p className={styles.dateText}>20-5-2023</p>

              <div className="section-text">
                text area text area text area text area text area text area text
                area text area text area text area text area text area text area
                text area text area text area text area text area text area text
                area
              </div>
            </Col>
            <Col lg={4} style={{ padding: "24px" }}>
              <RecentArticles slug="slug" />
              <div style={{ marginTop: "24px" }}>
                <MobileLink mobile="phone_number" />
              </div>
              <div style={{ marginTop: "24px" }}>
                <p className={styles.title}>Follow Us</p>
                <Socials
                  facebook="url"
                  instagram="url"
                  linkedin="url"
                  twitter="url"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
