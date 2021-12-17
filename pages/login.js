import Head from "next/head";
import Router from "next/router";

import Image from "next/image";
import { Component } from "react";
import { Signup } from "../components/Signup";
import {SignupForm } from "../components/SignupForm";
import styles from "../styles/Home.module.css";
import { LoginForm } from "../components/LoginForm";
import { signIn } from "next-auth/react";
import signup from "./register";

export default function login() {
  let u = "john@gmail.com";
  let p = "test";

  return (
    <div>
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
              check="/checkmark.svg"
              text={"Browse and find what you need"}
              link="login"
            />
          </div>
          <LoginForm
            click={() => {
              signIn("credentials", {
                username: u,
                password: p,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
