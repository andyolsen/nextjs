'use client'

import { useState, useRef } from 'react'
import { processProductSuggestionSlooooooowly } from '../my-server-actions'
import { useFormStatus } from 'react-dom'
import styles from './example7.module.css'

export function SubmitButton({label} : {label: string}) {

  // The useFormStatus() hook enables you to specify a "pending" UI while the form is being submitted.
  const { pending } = useFormStatus()
  
  return (
    <button type="submit" disabled={pending}>
      {label}
    </button>
  )
}


export default function Example7() {

  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('')
  const ref = useRef<HTMLFormElement>(null)

  return (
    <>
      <h1>Example 7</h1>
      <div>This page uses the useFormStatus() hook to show a pending UI while the form is being submitted.</div>

      <form
        className={styles.form}
        ref={ref}
        action={async (formData) => {
          await processProductSuggestionSlooooooowly(formData)
          ref.current?.reset()
          setCount(count + 1)
          setMsg('Form submitted dude')
        }}
      >
        <input name="description" placeholder="Product suggestion"  />
        <input name="recommendedPrice" placeholder="Recommended price" type="number" />
        <input name="estimatedSales" placeholder="Estimated annual sales" type="number" />
        <input type="hidden" name="count" value={count} />
        
        <SubmitButton label='Submit' />  { /* Custom component, see top of this code file */ }

      </form>
      <div id="messageArea">{msg}</div>
    </>
  )
}