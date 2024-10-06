import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/layouts-demo">Layouts demo</Link> 
      <Link href="/templates-demo">Templates demo</Link> 
      <Link href="/errors-demo">Errors demo</Link> 
    </nav>
  );
}
