export async function getData() {

  console.log("***** Fetching REST API at server *****")

  // Call fetch() to GET data from a REST API (we'll discuss cache:'no-store' later).
  const res = await fetch('http://localhost:8080/server-api/products', {
    cache: 'no-store',    
    headers: {
      'Content-Type': 'application/json',
      'Auth-Api-Key': process.env.API_KEY || ''
    }
  })
  return res.json() 
}