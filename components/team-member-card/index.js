import Image from "next/image";

import Socials from "../socials";

import styles from "./card.module.scss";

const TeamMemberCard = () => {
  return (
    <div className={styles.card}>
      <Image
        width={500}
        height={680}
        alt="icon"
        src="/images/1.png"
        className={styles.image}
      />
      <div className={styles.detailsDiv}>
        <p className={styles.cardTitle}>CEO | Founder</p>
        <p className={styles.cardSubtitle}>John Doe</p>
        <Socials centered facebook="1" instagram="2" linkedin="3" twitter="4" />
      </div>
    </div>
  );
};

export default TeamMemberCard;
