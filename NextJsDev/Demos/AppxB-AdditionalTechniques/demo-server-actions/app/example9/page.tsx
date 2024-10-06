'use client'

import { useRef, useActionState } from 'react'
import { processProductSuggestionStateful } from '../my-server-actions'
import styles from './example9.module.css'

const initialState = {
  submitCount: 0,
  statusMessage: 'n/a' 
}

export default function Example9() {

  const refForm = useRef<HTMLFormElement>(null)
  const refFirstField = useRef<HTMLInputElement>(null)

  const [state, formAction] = useActionState(processProductSuggestionStateful, initialState)

  // This function performs a programmatic form submission if the user pressed Ctrl+Enter.
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault()
      e.currentTarget.form?.requestSubmit()
    }
  }

  return (
    <>
      <h1>Example 9</h1>
      <div>This component illustrates programmatic form submission. Press Ctrl+Enter in the 'blurb' to submit.</div>

      <form
        className={styles.form}
        ref={refForm}
        action={async (formData) => {
          await formAction(formData)
          refForm.current?.reset()
          refFirstField.current?.focus()
        }}
      >
        <input name="description" placeholder="Product suggestion" ref={refFirstField} />
        <input name="recommendedPrice" placeholder="Recommended price" type="number" />
        <input name="estimatedSales" placeholder="Estimated annual sales" type="number" />
        <textarea name="blurb" placeholder="blurb" rows={5} onKeyDown={handleKeyDown} />
      </form>
      <div>Submit count {state.submitCount}</div>
      <div>Response from server: {state.statusMessage}</div>
    </>
  )
}