import styles from "../styles/forms.module.css";
import React, { useState } from "react";
import { _Authentication } from "../_helpers/authentication";
 

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

        if(data) {
          _Authentication(data.token,data.user);
          console.log(data.token,data.user);
        }

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
