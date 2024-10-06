import { revalidatePath, revalidateTag } from "next/cache"

export const dynamic = 'force-dynamic' // Ensure the REST APIs are called at run-time, not build-time.

// Note the folder name is /app/api/(prod-related)/product/[[...id]].
// The [[...id]] bit is an optional catch-all segment.
// It means this route handler handles both of the following routes:
//    /api/product
//    /api/product/*


// Handle GET requests to /api/product/[id].
export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {

  const id = params.id            // Get the id from the path. 

  const response = await fetch(`http://localhost:8080/server-api/products/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Auth-Api-Key': process.env.API_KEY || ''
    },
    next: {
      revalidate: 10
    }
  })
  return response
}


// Handle PUT requests to /api/product/[id].
// The Request parameter gives us access to the HTTP request body, which contains JSON for the updated product. 
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {

  const id = params.id                // Get the id from the path. 
  const body = await request.text()   // Get the product (as JSON) from the HTTP request body.

  const response = await fetch(`http://localhost:8080/server-api/products/${id}`, {
    method: 'PUT',
    body: body,   
    headers: {
    'Content-Type': 'application/json',
    'Auth-Api-Key': process.env.API_KEY || ''
    },
  })

  // revalidatePath() tells Next.js to invalidate the specified path (i.e., "the cached data is out-of-date").
  revalidatePath(`/api/product/${id}`)

  // revalidateTag() tells Next.js to invalidate any requests that are tagged with the tag "products-summary".
  revalidateTag('products-summary')

  return response
}


// Handle POST requests to /api/product.
// The Request parameter gives us access to the HTTP request body, which contains JSON for the new product. 
export async function POST(request: Request) {

  const body = await request.text()   // Get the product (as JSON) from the HTTP request body.

  const response = await fetch(`http://localhost:8080/server-api/products`, {
    method: 'POST',
    body: body,   
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Auth-Api-Key': process.env.API_KEY || ''
    },
  })

  // revalidateTag() tells Next.js to invalidate any requests that are tagged with the tag "products-summary".
  revalidateTag('products-summary')

  return response
}


// Handle DELETE requests to /api/product/[id].
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {

  const id = params.id            // Get the id from the path. 

  const response = await fetch(`http://localhost:8080/server-api/products/${id}`, {
    method: 'DELETE',
    headers: {
    'Auth-Api-Key': process.env.API_KEY || ''
    },
  })

  // revalidatePath() tells Next.js to invalidate the specified path (i.e., "the cached data is out-of-date").
  revalidatePath(`/api/product/${id}`)

  // revalidateTag() tells Next.js to invalidate any requests that are tagged with the tag "products-summary".
  revalidateTag('products-summary')

  return response
}