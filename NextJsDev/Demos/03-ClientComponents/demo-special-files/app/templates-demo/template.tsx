"use client"

import Link from "next/link"
import {useState} from "react"
import styles from "./templates-demo.module.css"

export default function LocalTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [comments, setComments] = useState("")

  return (
    <>
      <div className={styles.secondLevelMenu}>
        <Link href="/templates-demo">Templates demo home</Link>
        <Link href="/templates-demo/about">About</Link>
        <Link href="/templates-demo/contact">Contact</Link>
        <input placeholder="Give us your comments" value={comments} onChange={(e) => setComments(e.target.value)} />  
      </div>

      {children}

    </>
  );
}
