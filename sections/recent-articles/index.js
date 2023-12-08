import React, { useEffect, useState } from "react";

import FooterArticleCard from "../../components/footer-article-card";

import styles from "./recent-articles.module.scss";
import Loader from "@/components/loader/loader";

const RecentArticles = ({ slug }) => {
  const [blogData, setBlogData] = useState();
  const tempBlog = [
    { title: "Blog Title", slug: "blog-title", date: "20-5-2023" },
    { title: "Blog Title", slug: "blog-title", date: "20-5-2023" },
    { title: "Blog Title", slug: "blog-title", date: "20-5-2023" },
  ];

  useEffect(() => {
    if (tempBlog) {
      const filteredArray = tempBlog.filter((item) => item.slug !== slug);
      filteredArray.sort((a, b) => new Date(b.date) - new Date(a.date));
      const newestBlog = filteredArray.slice(0, 3);
      setBlogData(newestBlog);
    }
  }, [tempBlog, slug]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Recent Articles</p>
      {blogData ? (
        blogData.map((item, index) => (
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
