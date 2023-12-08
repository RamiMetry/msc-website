import { useRouter } from "next/router";

import styles from "./card.module.scss";

const FooterArticleCard = ({ data }) => {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => {
        router.push("/blog/single-blog");
      }}
    >
      <p className={styles.cardTitle}>{data.title}</p>
      <p className={styles.cardDate}>{data.date}</p>
    </div>
  );
};

export default FooterArticleCard;
