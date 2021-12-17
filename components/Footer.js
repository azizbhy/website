import Link from "next/link";

import styles from "../styles/layout.module.css";
import { Logo } from "./Logo";


export const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <Logo />
        <p> &copy; All Right Reserved.</p>
      </footer>
    </div>
  );
};
