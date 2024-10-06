"use client"

import { useState, useEffect } from 'react';

export default function ErrorsDemo() {
  
  let [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 0 && count % 5 == 0)
      throw new Error("Eeek, count is 5")
  }, [count])

  return (
    <>
      <h1>Errors demo</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </>
  );
}