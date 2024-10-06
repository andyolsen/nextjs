'use client'

export default function ShopsComponent() {
  
  async function getShops() {
    
    const response = await fetch("api/shops")
    const data = await response.json()

    const messageArea = document.getElementById("messageArea")
    messageArea!.innerText = JSON.stringify(data)
  }

  return (
    <div>
      <h1>Calling a route handler that invokes an API</h1>
      <button onClick={getShops}>Get shops</button>
      <div id="messageArea"/>
    </div>
  );
}