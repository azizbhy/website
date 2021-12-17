
import { Signup } from "../components/Signup";
import styles from "../styles/Home.module.css";
import { Logo } from "../components/Logo";
import { _isAuthenticated } from "../_helpers/authentication";
import router from "next/router";

export default function Home() {

  if(_isAuthenticated()){
    router.push("/home");
  }

  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        
          <div className={styles.logoContainer}>
            <Logo />
          </div>
      
          <div className={styles.flexContainer}>
            <div className={styles.container}>
              <div className={styles.registerContainer}>
                <Signup
                  title={"Sign Up"}
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
