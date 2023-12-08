import React from "react";
import { useRouter } from "next/router";
import { Container, Col, Row } from "react-bootstrap";

import BlogCard from "@/components/blog-card";
import MainButton from "@/components/main-button";

import styles from "./blog.module.scss";

const Blog = () => {
  const router = useRouter();
  const blogData = [
    {
      image: "/images/555.jpg",
      title: "blog 1",
      slug: "blog-1",
      date: "20/05/2023",
      short_text:
        "text area text area text area text area text area text area text area text area text area ",
    },
    {
      image: "/images/666.jpg",
      title: "blog 2",
      slug: "blog-2",
      date: "20/05/2023",
      short_text:
        "text area text area text area text area text area text area text area text area text area ",
    },
    {
      image: "/images/777.jpg",
      title: "blog 3",
      slug: "blog-3",
      date: "20/05/2023",
      short_text:
        "text area text area text area text area text area text area text area text area text area ",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Container className={styles.team}>
        <Row>
          <Col className={styles.infoCol}>
            <p className="section-title-small">blog_section_title</p>
            <p className="section-title-big">blog_title</p>
          </Col>
        </Row>
        <Row>
          {blogData.slice(0, 3).map((item, index) => (
            <Col lg={4} md={6} className={styles.servicesCol} key={index}>
              <BlogCard data={item} />
            </Col>
          ))}
        </Row>
        <Row className={styles.btnRow}>
          <MainButton
            text="explore more"
            onClick={() => {
              router.push("/blogs");
            }}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
