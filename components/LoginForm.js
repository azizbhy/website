import styles from "../styles/forms.module.css";
import React, { useState } from "react";
import { signin } from "../pages/api/auth";
import { useRouter } from "next/router";
import { _Authentication } from "../_helpers/authentication";
import isEmpty from "validator/lib/isEmpty";


export const LoginForm = () => {

    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    


    async function loginUser(event){

        event.preventDefault();
        const response = await fetch('http://localhost:4000/users/login', {
    
          method: 'POST',   
          headers : {
            'withCredentials' : true,
            'Content-type' : 'application/json',
          },    
          body : JSON.stringify({
            email,
            password
          }),
        })

        const data = await response.json();

        console.log(data);
      }

    return (
    <div className="provider">
      <form onSubmit={loginUser}
        className={styles.mainForm}
      >
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}         
          id="input-username-for-credentials-provider"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}         
          id="input-password-for-credentials-provider"
          placeholder="Password"
          required
        />
        <input type="submit" value="Connect"/>
      </form>
    </div>
  );
};
