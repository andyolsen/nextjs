import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.splash}>
      <Image src="/swanseamarina.jpg" alt="Home" fill={true} priority={true}/>
      <div className={styles.centered}>Route Groups Demo</div>
    </div>
  );
}