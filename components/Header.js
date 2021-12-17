import Link from "next/link";

import styles from "../styles/layout.module.css";
import { Logo } from "./Logo";
import { session, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <header>
      {!session ? (
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
        {session ? (
          <button className={styles.logout} onClick={() => signOut()}>
            <strong>J</strong>
          </button>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};
