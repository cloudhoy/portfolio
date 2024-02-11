import styles from "./BubbleUpCubesBackground.module.css";

const BubbleUpCubesBackground = () => {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} className={styles.cube}></div>
      ))}
    </div>
  );
};

export default BubbleUpCubesBackground;
