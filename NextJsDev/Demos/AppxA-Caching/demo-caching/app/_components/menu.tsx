import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/full-route-cache-demo">Full Route Cache</Link> 
        <Link href="/router-cache-static-route-demo">Router Cache [static]</Link> 
        <Link href="/router-cache-dynamic-route-demo">Router Cache [dynamic]</Link> 
        <Link href="/router-cache-dynamic-route-with-refresh-demo">Router Cache [dynamic/refresh]</Link> 
        <Link href="/request-memoization-via-fetch-function">Request Memoization [fetch]</Link> 
        <Link href="/request-memoization-via-cache-function">Request Memoization [cache]</Link>
        <Link href="/data-cache-via-fetch-function">Data Cache [fetch]</Link> 
        <Link href="/data-cache-via-cache-function">Data Cache [cache]</Link> 
      </nav>
    </>
  );
}
