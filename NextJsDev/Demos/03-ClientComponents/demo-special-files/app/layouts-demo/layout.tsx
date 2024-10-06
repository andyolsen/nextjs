"use client"

import Link from "next/link"
import {useState} from "react"
import styles from "./layouts-demo.module.css"

export default function LocalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [comments, setComments] = useState("")

  return (
    <>
      <div className={styles.secondLevelMenu}>
        <Link href="/layouts-demo">Layouts demo home</Link>
        <Link href="/layouts-demo/about">About</Link>
        <Link href="/layouts-demo/contact">Contact</Link>
        <input placeholder="Give us your comments" value={comments} onChange={(e) => setComments(e.target.value)} />  
      </div>

      {children}

    </>
  );
}