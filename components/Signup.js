import Link from "next/link";
import React from "react";
import styles from "../styles/signup.module.css";

export const Signup = ({ title, icon, text, link, check, click }) => {
  return (
    <Link href={link}>
      <div onClick={click}>
        <div
          className={`${styles.register}  ${
            title == "Sign In" ? styles["margin"] : styles[""]
          }`}
        >
          <img className={styles.check} src={check} alt="" />
          <div className={styles.logo}>
            <img src={icon} alt="" />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
};
