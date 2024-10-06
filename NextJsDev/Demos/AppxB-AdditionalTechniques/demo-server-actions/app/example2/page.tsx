'use client'

import { useEffect } from 'react'
import { writeMessageToFile } from '../my-server-actions'

export default function Example2() {

  useEffect(() =>
  {
    // Invoke a server action.
    writeMessageToFile('Howdy from Example2');
  })
  
  return (
    <>
      <h1>Example 2</h1>
      <div>This component calls a server action that writes a message to a file on the server.</div>
    </>
  )
}