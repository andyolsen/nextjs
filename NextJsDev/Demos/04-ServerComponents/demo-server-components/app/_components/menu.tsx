import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/static-rendering-demo">Static rendering</Link> 
      <Link href="/dynamic-rendering-demo">Dynamic rendering</Link> 
      <Link href="/dynamic-rendering-with-refresh-demo">Dynamic rendering with refresh</Link> 
      <Link href="/accessing-environment-info">Accessing environment info</Link> 
      <Link href="/invoking-protected-rest-api">Invoking protected REST API</Link> 
      <Link href="/accessing-server-file-system">Accessing server file system</Link>
      <Link href="/accessing-database">Accessing database</Link>
      <Link href="/passing-content-from-server-to-client">Passing content</Link>
    </nav>
  );
}
