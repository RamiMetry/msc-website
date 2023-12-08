import Link from "next/link";
import Image from "next/image";

import styles from "./card-big.module.scss";

const BlogCardBig = ({ data }) => {
  return (
    <div className={styles.cardWrapper}>
      <Image
        width={500}
        height={500}
        alt="icon"
        src={data.image}
        className={styles.image}
      />
      <div className={styles.detailsDiv}>
        <p className={styles.cardTitle}>{data.title}</p>
        <p className={styles.cardDate}>{data.date}</p>
        <p className={styles.text}>{data.text}</p>
        <Link href="/blog/single-blog" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCardBig;
