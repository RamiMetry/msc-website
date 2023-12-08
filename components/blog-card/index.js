import Link from "next/link";
import Image from "next/image";

import styles from "./card.module.scss";

const BlogCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <Image
        width={500}
        height={500}
        alt="blog image"
        src={data.image}
        className={styles.image}
      />
      <div className={styles.detailsDiv}>
        <p className={styles.cardTitle}>{data.title}</p>
        <p className={styles.cardDate}>{data.date}</p>
        <p className={styles.text}>{data.short_text}</p>
        <Link href="/blog/single-blog" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
