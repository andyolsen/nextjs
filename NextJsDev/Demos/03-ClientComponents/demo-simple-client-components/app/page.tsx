import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.splash}>
      <Image src="/swanseabay.jpg" alt="Home" fill={true} priority={true}/>
      <div className={styles.centered}>Simple Client Components Demo</div>
    </div>
  );
}