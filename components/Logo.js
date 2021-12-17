import Link from "next/link";

import styles from "../styles/layout.module.css";
export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div className={styles.logo}>
          <div className={styles.orange}>
            <div className={styles.blue}></div>
          </div>
        </div>
      </Link>
    </div>
  );
};
