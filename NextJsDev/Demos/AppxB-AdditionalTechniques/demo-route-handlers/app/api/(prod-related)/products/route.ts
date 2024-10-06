import IProduct from '../../../_model/product'

export const dynamic = 'force-dynamic' // Ensure the REST APIs are called at run-time, not build-time.

// Note this route handler declares a Request parameter.
// This enables the route handler to access info from the client's request, such as the URL (and search parameters).
export async function GET(request: Request) {

  // Note the next.revalidate property in this fetch() call.
  // This revalidates (i.e., invalidates) the Next.js fetch() response in the Data Cache after 10 seconds.
  const res = await fetch('http://localhost:8080/server-api/products', {
    headers: {
      'Auth-Api-Key': process.env.API_KEY || ''
    },
    next: {
      revalidate: 10
    }
  })
  const products : IProduct[] = await res.json() 

  // See if the client-requested URL included a search parameter ?sortOrder=asc or ?sortOrder=desc.
  const { searchParams } = new URL(request.url)
  const sortOrder = searchParams.get('sortOrder')
  if (sortOrder === "asc") {
    products.sort((p1, p2) => p1.price - p2.price)
  }
  else if (sortOrder === "desc") {
    products.sort((p1, p2) => p2.price - p1.price)
  }

  return Response.json({ products })
}