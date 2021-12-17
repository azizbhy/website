import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import { Signup } from "../components/Signup";
import { SignupForm } from "../components/SignupForm";
import styles from "../styles/Home.module.css";
import { LoginForm } from "../components/LoginForm";
import Router from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Logo } from "../components/Logo";

export default function Home() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        {session ? (
          <div className={styles.bigContainer}>
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            <p className={styles.p}>The Logo Above is made in Pure CSS :D</p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
