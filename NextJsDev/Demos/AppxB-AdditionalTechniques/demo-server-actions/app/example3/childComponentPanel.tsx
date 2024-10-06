'use client'

import { useEffect } from 'react'

export default function ChildComponentPanel({serverActionToCall} : {serverActionToCall: any}) {

  useEffect(() =>
  {
    // Invoke a server action.
    serverActionToCall();
  })
  
  return (
    <div>ChildComponentPanel, calls a server action specified as a property</div>
  )
}