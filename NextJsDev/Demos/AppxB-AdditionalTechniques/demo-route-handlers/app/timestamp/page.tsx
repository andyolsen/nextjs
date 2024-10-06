'use client'

export default function TimestampComponent() {
  
  async function getTimestamp() {

    const response = await fetch("api/timestamp")
    const data = await response.json()

    const messageArea = document.getElementById("messageArea")
    messageArea!.innerText = JSON.stringify(data)
  }

  return (
    <div>
      <h1>Calling a simple route handler</h1>
      <button onClick={getTimestamp}>Get timestamp</button>
      <div id="messageArea"/>
    </div>
  );
}