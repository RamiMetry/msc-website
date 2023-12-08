import Image from "next/image";

import styles from "./serciceCard.module.scss";

const SerciceCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <Image width={70} height={70} alt="image" src={data.image} />

      <p className={styles.cardTitle}>{data.title}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: data.description,
        }}
        className={styles.cardSubtitle}
      />
    </div>
  );
};

export default SerciceCard;
