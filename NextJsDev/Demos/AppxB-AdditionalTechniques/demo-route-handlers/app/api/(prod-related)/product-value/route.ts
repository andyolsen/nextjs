export const dynamic = 'force-dynamic' // Ensure the REST APIs are called at run-time, not build-time.

// Handle GET requests to api/product-value.
export async function GET() {

  // Note the next.tags property in this fetch() call.
  // It tells Next.js to discard the result of this fetch() call from the cache
  // if any other piece of code revalidates the tag "products-summary". 

  const response = await fetch('http://localhost:8080/server-api/products-summary/value', {
    headers: {
      'Auth-Api-Key': process.env.API_KEY || ''
    },
    next: { 
      tags: ['products-summary'] 
    }
  })
  return response
}