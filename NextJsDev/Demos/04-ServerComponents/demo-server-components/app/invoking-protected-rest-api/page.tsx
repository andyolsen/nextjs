import IProduct from "../_model/product"

// By default, Next.js attempts to render server components statically (i.e. ay build-time).
// This server component utilises REST APIs that will only be available at run-time, 
// so you must force Next.js to render dynamically (i.e. at run-time).
export const dynamic = 'force-dynamic'

export default async function InvokingProtectedRestApi() {

  const response = await fetch('http://localhost:8080/server-api/products', {
    headers: {
      'Auth-Api-Key': process.env.API_KEY || ''
    }
  })

  const products : IProduct[] = await response.json()
  
  return (
    <>
      <h1>Invoking a protected REST API</h1>
      <h2>Products</h2>
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
  )
}