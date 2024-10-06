import Link from 'next/link'
import { Catalog } from "../../_model/catalog";

export default function ProductsPage() {

  let products = Catalog.getAllProductItems()

  return (
    <div>
      <h1>Products [brief]</h1>
      <ul>
      {
        products.map((p, i) =>
          <li key={i}>
            <Link href={`/product/${p.id}`}>{p.description}</Link>
          </li>
        )
      }
      </ul>

      <h1>Products [verbose]</h1>
      <ul>
      {
        products.map((p, i) =>
          <li key={i}>
            <Link href={ {pathname: `/product/${p.id}`, query: {verbose: 'true'} }}>
              {p.description}
            </Link>
          </li>
        )
      }
      </ul>
    </div>
  )
}