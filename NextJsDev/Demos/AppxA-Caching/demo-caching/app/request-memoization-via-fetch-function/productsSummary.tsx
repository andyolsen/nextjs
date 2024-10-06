import IProduct from '../_model/product'
import { getData } from './getData'

export default async function ProductsSummary() {

  const products : IProduct[] = await getData() 
  
  const numProducts = products.length
  const totalValue = products.reduce((sum, currentProduct) => sum + currentProduct.price, 0)
  const averageValue = totalValue / numProducts

  return (
    <>
      <h3>Products summary</h3>
      <div>Number of products: {numProducts}</div>
      <div>Total value of products: {totalValue}</div>
      <div>Average value of products: {averageValue}</div>
    </>
  );
}