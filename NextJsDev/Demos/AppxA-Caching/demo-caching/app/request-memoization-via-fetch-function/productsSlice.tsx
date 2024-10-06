import IProduct from '../_model/product'
import { getData } from './getData';

export default async function ProductsSlice(
  {sliceSize, sortOrder} : {sliceSize: number, sortOrder: string}) {

  const products : IProduct[] = await getData() 

  if (sortOrder === "asc") {
      products.sort((p1, p2) => p1.price - p2.price)
  }
  else if (sortOrder === "desc") {
      products.sort((p1, p2) => p2.price - p1.price)
  }
  
  return (
    <>
      <h3>Top {sliceSize} products [{sortOrder} price]</h3>
      <ul>
      {
        products.slice(0, 3).map((p, i) => 
          <li key={i}>
            {p.description} ({p.category}), &pound;{p.price}
          </li>
        )
      }
      </ul>
    </>
  );
}
