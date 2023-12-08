import styles from "./loader.module.scss";

const Loader = ({ color = "var(--purple)" }) => {
  return (
    <svg className={styles.svg} viewBox="25 25 50 50">
      <circle
        style={{ stroke: `${color}` }}
        className={styles.circle}
        r="20"
        cy="50"
        cx="50"
      ></circle>
    </svg>
  );
};

export default Loader;
