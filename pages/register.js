import { Signup } from "../components/Signup";
import SignupForm  from "../components/SignupForm";
import styles from "../styles/Home.module.css";
import React from "react";
import { _isAuthenticated } from "../_helpers/authentication";
import { useRouter } from "next/router";

export default function register(){

  const router = useRouter();

    return (
      <div>
        <div className={styles.flexContainer}>
          <div className={styles.container}>
            <div className={styles.registerContainer}>
              <Signup
                title={"Register"}
                icon={"./register.svg"}
                check="/checkmark.svg"
                text={"Create An Account Here"}
                link="register"
              />
              <Signup
                title={"Sign In"}
                icon={"./log-in.svg"}
                text={"Connect To Your Account Here"}
                link="login"
              />
            </div>
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }



