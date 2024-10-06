'use client'

import { countLinesInFile } from '../my-server-actions'

export default function Example4() {

  async function clickHandler() {

    // Call a server action.
    const lineCount = await countLinesInFile()
    
    const messageArea = document.getElementById('messageArea')
    messageArea!.innerText = `Server file contains ${lineCount} lines`
  }

  return (
    <>
      <h1>Example 4</h1>
      <div>This client component shows that you can invoke a server action in response to a browser event.</div>
      <button onClick={clickHandler}>Get line count</button>
      <div id='messageArea'/>
    </>
  )
}