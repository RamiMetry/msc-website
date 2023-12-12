import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./serciceCard.module.scss";

const SerciceCard = ({ data }) => {
  const router = useRouter();
  console.log(data)
  return (
    <div
      className={styles.card}
      onClick={() => {
        router.push(`/service/${data.id}`);
      }}
    >
      <Image width={70} height={70} alt="image" src={data.attributes.card_image.data.attributes.url} />

      <p className={styles.cardTitle}>{data.attributes.name}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: data.attributes.description,
        }}
        className={styles.cardSubtitle}
      />
    </div>
  );
};

export default SerciceCard;
