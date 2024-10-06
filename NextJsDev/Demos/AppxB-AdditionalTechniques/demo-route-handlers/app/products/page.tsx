'use client'

import { useState } from 'react'
import IProduct from '../_model/product'
import ProductPanel from '../_components/productPanel'

export default function ProductsUI() {
  
  const [products, setProducts] = useState(new Array<IProduct>())

  async function getProducts(queryString: string = '') {
    const response = await fetch(`api/products${queryString}`)
    const data = await response.json()
    setProducts(data.products)
  }

  return (
    <div>
      <h1>Understanding cache revalidation</h1>
      <button onClick={() => getProducts()}>Get products [unsorted]</button> &nbsp;
      <button onClick={() => getProducts('?sortOrder=asc')}>Get products [price asc]</button> &nbsp;
      <button onClick={() => getProducts('?sortOrder=desc')}>Get products [price desc]</button>
     
      {
        products.map((p: any, i: any) => <ProductPanel key={i} {...p} /> )
      }
    </div>
  );
}