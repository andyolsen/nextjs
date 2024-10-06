import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/one-or-other">One-or-other</Link>
      <Link href="/side-by-side">Side-by-side</Link>
    </nav>
  );
}
