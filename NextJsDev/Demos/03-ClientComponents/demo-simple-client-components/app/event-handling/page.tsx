'use client'

import styles from './event-handling.module.css'

export default function EventHandling() {
  
  function displayMessage(message: string) {
    const messageArea = document.getElementById("messageArea")
    messageArea!.innerText = message
  }

  return (
    <div>
      <h1>Event handling demo</h1>
      <button onClick={() => displayMessage("Hello")}>Say hello</button>
      <button onClick={() => displayMessage("Goodbye")}>Say goodbye</button>
      <div id="messageArea" className={styles.panel}/>
    </div>
  );
}