'use client'

import { useState } from 'react'

export default function ProductAdmin() {
  
  const [id, setId] = useState(-1)

  return (
    <div>
      <h1>Using comprehensive route handlers</h1>

      <input type='number' placeholder='Enter a product id' onChange={e => setId(Number(e.target.value))}/> &nbsp;

      <button onClick={() => doGet(id)}>Get Product</button> &nbsp;
      <button onClick={() => doInsert()}>Insert Product</button> &nbsp;
      <button onClick={() => doUpdate(id)}>Update Product</button> &nbsp;
      <button onClick={() => doDelete(id)}>Delete Product</button> &nbsp;&nbsp;&nbsp;&nbsp;

      <button onClick={() => doGetProductCount()}>Get Product Count</button> &nbsp;
      <button onClick={() => doGetProductValue()}>Get Product Value</button> 

      <div id='messageArea'/>
    </div>
  );
}


async function doGet(id: number) {

  const response = await fetch(`api/product/${id}`)
  
  if (!response.ok) {
    displayMessage(`Product ${id} not found`)
    return
  }
  
  const product = await response.json()
  displayMessage(`Got product ${id}: ${JSON.stringify(product)}`)
}


async function doInsert() {
  
  const newProduct = { description: 'Lear Jet', category: 'Luxury play-thing', price: 15_000_000 };
  
  const response = await fetch('api/product', {
    method: 'POST',
    body: JSON.stringify(newProduct)
  })

  if (response.ok) {
    displayMessage(`Product insert succeeded, location is ${response.headers.get('location')}`)
  }
  else {
    displayMessage(`Product insert failed`)
  }
}


async function doUpdate(id: number) {
  
  const response = await fetch(`api/product/${id}`)
  
  if (!response.ok) {
    displayMessage(`Product ${id} not found`)
    return
  }
  
  const product = await response.json()
  product.price *= 2

  const response2 = await fetch(`api/product/${id}`, {
    method: 'PUT',
    body: JSON.stringify(product)
  })
  if (response2.ok) {
    displayMessage(`Product ${id} update succeeded`)
  }
  else {
    displayMessage(`Product ${id} update failed`)
  }
}


async function doDelete(id: number) {
  
  const response = await fetch(`api/product/${id}`, {
    method: 'DELETE'
  })

  if (response.ok) {
    displayMessage(`Product ${id} delete succeeded`)
  }
  else {
    displayMessage(`Product ${id} delete failed`)
  }
}


async function doGetProductCount() {
  const response = await fetch('api/product-count') 
  const count = await response.json()
  displayMessage(`Number of products: ${count}`)
}


async function doGetProductValue() {
  const response = await fetch('api/product-value') 
  const totalValue = await response.json()
  displayMessage(`Value of products: ${totalValue}`)
}


function displayMessage(message: string) {
  const messageArea = document.getElementById('messageArea')
  messageArea!.innerText = message
}