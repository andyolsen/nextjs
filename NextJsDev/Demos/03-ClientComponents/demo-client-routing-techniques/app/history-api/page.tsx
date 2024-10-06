'use client'
 
import { useSearchParams } from 'next/navigation'
import { Catalog } from "../_model/catalog";

import styles from './historyApi.module.css'

export default function SortProducts() {

  let products = Catalog.getAllProductItems()

  const searchParams = useSearchParams()
  const sortOrder = searchParams.get('sort')

  if (sortOrder === 'asc')
    products.sort((p1, p2) => p1.price - p2.price)
  else if (sortOrder === 'desc')
    products.sort((p1, p2) => p2.price - p1.price)

  return (
    <>
      <h1>Products</h1>
      {
        products.map((p, i) =>
          <div key={i} className={styles.panel}>
            <div><b>{p.description}</b></div>
            <div>Price: {p.price}</div>
            <div>Likes: {p.likes}</div>
            <div>Most recent like: {p.mostRecentLike}</div>
          </div>
        )
      }
      
      <br/>
      <div>
        <button onClick={() => window.history.pushState(null, '', '?sort=asc')}>Sort Ascending</button>
        <button onClick={() => window.history.pushState(null, '', '?sort=desc')}>Sort Descending</button>&nbsp;
        <span>...using pushState()</span>
      </div>

      <br/>
      <div>
        <button onClick={() => window.history.replaceState(null, '', '?sort=asc')}>Sort Ascending</button>
        <button onClick={() => window.history.replaceState(null, '', '?sort=desc')}>Sort Descending</button>&nbsp;
        <span>...using replaceState()</span>
      </div>
    </>
  )
}