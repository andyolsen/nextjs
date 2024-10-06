'use client'

import { useEffect } from "react"
import { serverConsoleLog } from '../my-server-actions'

export default function Example1() {

  useEffect(() =>
  {
    // Invoke a server action.
    serverConsoleLog();
  })
  
  return (
    <>
      <h1>Example 1</h1>
      <div>This component calls a server action that logs a message on the Next.js server console.</div>
    </>
  )
}