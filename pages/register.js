import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import { Signup } from "../components/Signup";
import SignupForm  from "../components/SignupForm";
import styles from "../styles/Home.module.css";
import LoginForm  from "../components/LoginForm";
import Link from "next/link";
import Router from "next/router";
import React from "react";

class register extends React.Component {

  render() {
    return (
      <div>
        <div className={styles.flexContainer}>
          <div className={styles.container}>
            <div className={styles.registerContainer}>
              <Signup
                title={"Register"}
                icon={"./register.svg"}
                check="/checkmark.svg"
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
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}


export default register;