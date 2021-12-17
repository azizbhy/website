
import styles from "../styles/Home.module.css";
import { Logo } from "../components/Logo";
import { _isAuthenticated } from "../_helpers/authentication";

export default function Home() {

   

  return (
    
    <div className={styles.flexContainer}>
     <div className={styles.container}>
      {_isAuthenticated() ? (
        <div className={styles.bigContainer}>
          <div className={styles.logoContainer}>
            <Logo />
            </div>
            <p className={styles.p}>THE LOGO ABOVE IS MADE IN PURE CSS</p>          
            </div>
            
    ) : (   
      <h2>Your are not logged in yet !</h2>
      
      )}
              </div>
            </div>
      
    
     
  );
}
