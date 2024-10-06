import styles from './layout.module.css';

export default function TsAndCsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.content}>{children}</div>
      <hr/>
      <small>[Ts and Cs info is advisory only, dude]</small>
    </>
  );
}