'use client'

import { useState, useRef } from 'react'
import { processProductSuggestion } from '../my-server-actions'
import styles from './example6.module.css'

export default function Example6() {

  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('')
  const ref = useRef<HTMLFormElement>(null)

  return (
    <>
      <h1>Example 6</h1>
      <div>This component illustrates several nice form-related techniques.</div>

      {
       /* 
        * Note that the form's "action" is a lambda that can do something interesting,  
        * such as await the asynchronous response from the server action and then do some subsequent work.
        * 
        * Also note that the form has a hidden field that is also submitted to the server action,
        * to show that you can submit additional state alongside the form's other input fields.
        */
      }  
      <form
        className={styles.form}
        ref={ref}
        action={async (formData) => {
          await processProductSuggestion(formData)
          ref.current?.reset()
          setCount(count + 1)
          setMsg('Form submitted dude')
        }}
      >
        <input name="description" placeholder="Product suggestion"  />
        <input name="recommendedPrice" placeholder="Recommended price" type="number" />
        <input name="estimatedSales" placeholder="Estimated annual sales" type="number" />
        <input type="hidden" name="count" value={count} />
        <button type="submit">Submit</button>
      </form>
      <div id="messageArea">{msg}</div>
    </>
  )
}