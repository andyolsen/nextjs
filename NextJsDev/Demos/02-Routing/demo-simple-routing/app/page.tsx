import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.splash}>

      { 
      /* In the <Image> component, the priority={true} property forces eager loading of the image
       * because it's part of the Largest Contentful Paint (LCP) element.
       * For more info about LCP, see https://nextjs.org/learn-pages-router/seo/web-performance/lcp
       */
      } 
      <Image src="/swanseamarina.jpg" alt="Home" fill={true} priority={true}/>
      
      <div className={styles.centered}>Simple Routing Demo</div>
    
    </div>
  );
}