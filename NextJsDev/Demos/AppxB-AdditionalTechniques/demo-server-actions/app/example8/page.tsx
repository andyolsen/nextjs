'use client'

import { useRef, useActionState } from 'react'
import { processProductSuggestionStateful } from '../my-server-actions'
import styles from './example8.module.css'

const initialState = {
  submitCount: 0,
  statusMessage: 'n/a' 
}

export default function Example8() {

  const ref = useRef<HTMLFormElement>(null)

  // The useActionState() hook holds component state at the server, rather than in the component itself.
  const [state, formAction] = useActionState(processProductSuggestionStateful, initialState)

  return (
    <>
      <h1>Example 8</h1>
      <div>This page uses the useActionState() hook to hold component state at the server, rather than in the component itself.</div>

      <form
        className={styles.form}
        ref={ref}
        action={async (formData) => {

          // Note: "formAction" is our handle to the stateful server action (see the useActionState() call at top of Example8() function).
          await formAction(formData)

          ref.current?.reset()
        }}
      >
        <input name="description" placeholder="Product suggestion"  />
        <input name="recommendedPrice" placeholder="Recommended price" type="number" />
        <input name="estimatedSales" placeholder="Estimated annual sales" type="number" />
        <button type="submit">Submit</button>
      </form>

      { /* Note: "state" is our handle to the state maintained by the server action. */ }
      <div>Submit count {state.submitCount}</div>
      <div>Response from server: {state.statusMessage}</div>
    </>
  )
}