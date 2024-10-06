'use client'

import { processProductSuggestion } from '../my-server-actions'
import styles from './example5.module.css'

export default function Example5() {

  return (
    <>
      <h1>Example 5</h1>
      <div>This client component shows that you can invoke a server action as a &lt;form&gt; action.</div>

      <form action={processProductSuggestion} className={styles.form}>
        <input name="description" placeholder="Product suggestion"  />
        <input name="recommendedPrice" placeholder="Recommended price" type="number" />
        <input name="estimatedSales" placeholder="Estimated annual sales" type="number" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}