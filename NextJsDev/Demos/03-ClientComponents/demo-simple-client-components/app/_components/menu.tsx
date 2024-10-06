import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/event-handling">Event handling</Link> 
      <Link href="/react-hooks">React hooks</Link> 
      <Link href="/browser-apis">Browser APIs</Link>
    </nav>
  );
}
