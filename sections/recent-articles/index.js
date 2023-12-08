import React from "react";

import FooterArticleCard from "../../components/footer-article-card";

import styles from "./recent-articles.module.scss";
import Loader from "@/components/loader/loader";

const RecentArticles = ({ slug }) => {
  const blogData = [
    { title: "Blog Title", slug: "blog-title", date: "20-5-2023" },
    { title: "Blog Title", slug: "blog-title", date: "20-5-2023" },
    { title: "Blog Title", slug: "blog-title", date: "20-5-2023" },
  ];

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Recent Articles</p>
      {blogData ? (
        blogData.slice(0, 3).map((item, index) => (
          <div key={index}>
            <FooterArticleCard data={item} />
          </div>
        ))
      ) : (
        <Loader color="var(--orange)" />
      )}
    </div>
  );
};

export default RecentArticles;
