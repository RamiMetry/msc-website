import { Container, Col, Row } from "react-bootstrap";

import BlogCardBig from "@/components/blog-card-big";
import PageBanner from "@/sections/page-banner";
import AppHead from "@/components/app-head";

import styles from "./blog.module.scss";

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
        title="Blog | M.S.C."
        description="Explore our new Blog articles"
        url="blogs"
      />

      <div className={styles.wrapper}>
        <PageBanner
          image="/images/plumbing.jpg"
          title="blog page"
          routingText2="blog page"
        />
        <Container>
          <Row>
            <div className={styles.detailsDiv}>
              <p className={styles.pageTitle}>page_title</p>
              <p className="section-text">
                text area text area text area text area text area text area text
                area text area text area
              </p>
            </div>
          </Row>
          <Row>
            {blogListData?.map((item, index) => (
              <Col md={6} className={styles.servicesCol} key={index}>
                <BlogCardBig data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
