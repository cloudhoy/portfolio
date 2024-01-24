"use client";

import { useMouse } from "@uidotdev/usehooks";
import styles from "./Background.module.css";

const Background = () => {
  const [mouse] = useMouse();
  return (
    <>
      <div className="fixed inset-0 overflow-hidden">
        <div
          className={styles.cursor}
          style={{ left: mouse.x, top: mouse.y }}
        ></div>
      </div>
      <div className={styles.background}></div>
    </>
  );
};

export default Background;
