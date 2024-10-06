import IProduct from '../_model/product'
import { getData } from './getData';

export default async function Products() {

  const products : IProduct[] = await getData() 

  return (
    <>
      <h3>Products</h3>
      <ul>
      {
        products.map((p, i) => 
          <li key={i}>
            {p.description} ({p.category}), &pound;{p.price}
          </li>
        )
      }
      </ul>
    </>
  );
}
