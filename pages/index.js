import { Signup } from "../components/Signup";
import styles from "../styles/Home.module.css";
import { Logo } from "../components/Logo";
import { _isAuthenticated } from "../_helpers/authentication";
import { signOut, useSession } from "next-auth/react";
import router from "next/router";



export default function Home() {



  
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
          <div className={styles.flexContainer}>
            <div className={styles.container}>
              <div className={styles.registerContainer}>
                <Signup
                  title={"Register"}
                  icon={"./register.svg"}
                  text={"Browse and find what you need"}
                  link="register"
                />

                <Signup
                  title={"Sign In"}
                  icon={"./log-in.svg"}
                  text={"Browse and find what you need"}
                  link="login"
                />
              </div>
            </div>
          </div>
       
      </div>
    </div>
  );
}
