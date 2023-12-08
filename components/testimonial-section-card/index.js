import styles from "./card.module.scss";

const TestimonialSectionCard = () => {
  return (
    <div className={styles.card}>
      <p className={styles.cardSubtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className={styles.cardTitle}>John Doe</p>
    </div>
  );
};

export default TestimonialSectionCard;
