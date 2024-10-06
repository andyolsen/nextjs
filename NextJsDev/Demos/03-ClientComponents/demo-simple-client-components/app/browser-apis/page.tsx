'use client'

import styles from './event-handling.module.css'

export default function BrowserAPIs() {

  function displayGeolocation() {

    const messageArea = document.getElementById("messageArea")
    if (!navigator.geolocation) {
      messageArea!.innerText = "Geolocation unavailable 🥹"
    }
    else {
      navigator.geolocation.getCurrentPosition(pos => {
        const lat  = pos.coords.latitude
        const lon = pos.coords.longitude
        messageArea!.innerText = `Latitude ${lat}, Longitude ${lon}`
      });
    }
  }

  return (
    <div>
      <h1>Browser APIs demo</h1>
      <button onClick={displayGeolocation}>Display geolocation</button>
      <div id="messageArea" className={styles.panel} />
    </div>
  );
}