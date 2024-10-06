import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/catalog">Catalog</Link>
      <Link href="/shops">Shops</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/preferences">Preferences</Link>
    </nav>
  );
}
