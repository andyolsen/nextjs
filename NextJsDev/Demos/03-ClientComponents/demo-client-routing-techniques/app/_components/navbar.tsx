'use client'

import { useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import styles from './navbar.module.css'

export default function NavBar() { 

  const [userInput, setUserInput] = useState('')    // We'll store the "search" textbox value in component state.

  const router = useRouter()                        // useRouter() facilitates programmatic navigation.
  const pathName = usePathname()                    // usePathname() allows us to get the path of the current route.
  const searchParams = useSearchParams()            // useSearchParams() allows us to get search params in the current route.

  return (
    <div className={styles.secondLevelMenu}>
      <span>Path: <b>{pathName}</b></span>
      <span>Search params: <b>{searchParams.toString()}</b></span>
      <div>
        <input placeholder="Enter a route" onChange={(e) => setUserInput(e.target.value)} />
        <button onClick={() => router.push(userInput)}>Go</button>  
      </div>
    </div>
  );
}