import styles from "../styles/forms.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";



const SignupForm = () => {
  
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function registerUser(event){

    event.preventDefault();


    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:4000/users/register', {

      method: 'POST',
      headers : {
        'Content-type' : 'application/json',
      },

      body : JSON.stringify({
        firstName,
        lastName,
        email,
        password
      }),
    })

    const data = await response.json();
    if(data){
      router.push("/login");
    }

    console.log(data);

   
  }



  return (
    <div>
      <form className={styles.mainForm} onSubmit={registerUser}>
        <div className={styles.name}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}         
            placeholder="First Name"
            required
          />
        <input  value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" placeholder="Last Name" required />
        </div>
        <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email" required />
        <input value={password} name="password" onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Password" required />
        <input type="submit" value="Register"/>
      </form>
    </div>
  );
};

export default SignupForm;
