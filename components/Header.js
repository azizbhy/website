import Link from "next/link";
import { _isAuthenticated } from "../_helpers/authentication";
import styles from "../styles/layout.module.css";
import { Logo } from "./Logo";

export const Header = () => {
 
  return (
    <header>
      {!_isAuthenticated  ? (
        <nav className={styles.topNav}>
          <Link href="/signin">Sign in</Link>
          <Link href="/signup">Sign up</Link>
        </nav>
      ) : (
        <></>
      )}

      <nav className={styles.mainNav}>
        <ul>
          <li>
            <Logo />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact us</Link>
          </li>
        </ul>
        {_isAuthenticated ? (
          <button className={styles.logout}>
            <strong>J</strong>
          </button>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};
