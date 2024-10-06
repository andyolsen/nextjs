import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/timestamp">Calling a simple route handler</Link> 
      <Link href="/shops">Calling a route handler that invokes an API</Link> 
      <Link href="/products">Understanding cache revalidation</Link> 
      <Link href="/product">Using a comprehensive route handler</Link> 
    </nav>
  );
}
