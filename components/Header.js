import Link from "next/link";
import styles from "../styles/layout.module.css";
import { Logo } from "./Logo";
import { _isAuthenticated } from "../_helpers/authentication";
import { useRouter } from "next/router";
import { logout } from "../_helpers/authentication";


export const Header = () => {
 
  const router = useRouter();

  const logoutUser = () => {
    if(logout()){
      router.push("/index")
    }
  };

  return (
    <header>

      
        <nav className={styles.topNav}>
          <Link href="/login">Sign in</Link>
          <Link href="/register">Sign up</Link>
        </nav>
        
  
   

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
        

          <button className={styles.logout} onClick={logoutUser}>
            <strong>Ar</strong>
          </button>
      
          <></>
       
      </nav>
     
    </header>
  );
};
