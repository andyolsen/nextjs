import Link from 'next/link'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <Link href="/">Home</Link>
      <Link href="/example1">Example 1</Link> 
      <Link href="/example2">Example 2</Link> 
      <Link href="/example3">Example 3</Link> 
      <Link href="/example4">Example 4</Link> 
      <Link href="/example5">Example 5</Link> 
      <Link href="/example6">Example 6</Link> 
      <Link href="/example7">Example 7</Link> 
      <Link href="/example8">Example 8</Link> 
      <Link href="/example9">Example 9</Link> 
    </nav>
  );
}
