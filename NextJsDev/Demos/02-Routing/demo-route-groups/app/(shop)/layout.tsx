import styles from './layout.module.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className={styles.panel}>{children}</div>
    <small>This is the (shop) layout in action dude</small>
    </>
  );
}
