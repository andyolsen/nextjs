'use client' 
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  useEffect(() => console.error(error), [error])
 
  return (
    <div>
      <h1>Error occurred 😨</h1>
      <h2>Error message: {error.message}</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}