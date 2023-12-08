import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";

import BlogCardBig from "@/components/blog-card-big";
import PageBanner from "@/sections/page-banner";
import AppHead from "@/components/app-head";
import DetailsBanner from "@/components/details-banner";

import styles from "./service.module.scss";

const Blogs = () => {
  const blogListData = [
    {
      title: "Blog Title",
      slug: "blog-title",
      text: "text area text area text area text area text area text area text area text area text area ",
      date: "20-5-2023",
      image: "/images/plumbing.jpg",
    },
    {
      title: "Blog Title",
      slug: "blog-title",
      text: "text area text area text area text area text area text area text area text area text area ",
      date: "20-5-2023",
      image: "/images/plumbing.jpg",
    },
    {
      title: "Blog Title",
      slug: "blog-title",
      text: "text area text area text area text area text area text area text area text area text area ",
      date: "20-5-2023",
      image: "/images/plumbing.jpg",
    },
    {
      title: "Blog Title",
      slug: "blog-title",
      text: "text area text area text area text area text area text area text area text area text area ",
      date: "20-5-2023",
      image: "/images/plumbing.jpg",
    },
  ];

  return (
    <>
      <AppHead
        title="Service | M.S.C."
        description="Explore our service"
        url="service"
      />

      <div className={styles.wrapper}>
        <PageBanner
          image="/images/333.jpg"
          title="service page"
          routingText2="service page"
        />
        <Container>
          <Row>
            <div className={styles.detailsDiv}>
              <p className={styles.pageTitle}>solar systems</p>
              <p className="section-text">
                text area text area text area text area text area text area text
                area text area text area
              </p>
            </div>
          </Row>
          <Row>
            <DetailsBanner />
          </Row>
          <Row className={styles.serviceRow}>
            <Col lg={6}>
              <p className="section-title-big">full solar systems support</p>
              <p className="section-text">
                text area text area text area text area text area text area text
                area text area text area text area text area text area text area
                text area text area text area
              </p>
              <div>
                <p className="section-title-small">overview of this service:</p>

                <p className="section-text">
                  text area text area text area text area text area text area
                  text area text area text area text area text area text area
                  text area text area text area text area
                </p>
              </div>
              {[1, 2, 3].map((index) => (
                <div style={{ display: "flex" }}>
                  <Image
                    width={15}
                    height={15}
                    alt="icon"
                    src="/images/arrow-right.svg"
                    style={{ marginTop: "6px", marginRight: "8px" }}
                  />

                  <div>
                    <p
                      className="section-title-small"
                      style={{ fontSize: "16px", marginBottom: "0" }}
                    >
                      small yello title
                    </p>
                    <p className="section-text">
                      text area text area text area text area text area text
                      area text area text area text area text area text area
                      text area text area text area text area text area
                    </p>
                  </div>
                </div>
              ))}
            </Col>
            <Col lg={6}>
              <div>
                <p className="section-title-small">
                  challenge for this service:
                </p>

                <p className="section-text">
                  text area text area text area text area text area text area
                  text area text area text area text area text area text area
                  text area text area text area text area
                </p>
              </div>
              {[1, 2].map((index) => (
                <div style={{ display: "flex" }}>
                  <Image
                    width={15}
                    height={15}
                    alt="icon"
                    src="/images/arrow-right.svg"
                    style={{ marginTop: "6px", marginRight: "8px" }}
                  />

                  <div>
                    <p
                      className="section-title-small"
                      style={{ fontSize: "16px", marginBottom: "0" }}
                    >
                      small yello title
                    </p>
                    <p className="section-text">
                      text area text area text area text area text area text
                      area text area text area text area text area text area
                      text area text area text area text area text area
                    </p>
                  </div>
                </div>
              ))}
              <Image
                width={400}
                height={200}
                alt="icon"
                src="/images/222.jpg"
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
