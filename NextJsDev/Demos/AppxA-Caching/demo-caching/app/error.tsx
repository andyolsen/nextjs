'use client'

import './globals.css'

export default function Error({error} : {error: Error}) {
  return (
    <>
      <h1 className='error'>OOPS - error occurred</h1>
      <div>{error.message}</div>
    </>
  );
}