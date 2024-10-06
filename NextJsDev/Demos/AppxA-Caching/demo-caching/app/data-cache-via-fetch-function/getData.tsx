import { unstable_noStore as noStore } from 'next/cache'


// This function shows that the Data Cache caches fetch() results automatically, by default.
export async function getDataNoRevalidation() {

  const response = await fetch('http://localhost:8080/server-api/timestamp1', {
    headers: {
      'Auth-Api-Key': process.env.API_KEY || ''
    }
  })
  const result = await response.json() 
  return result
}


// This function shows how to cache a fetch() result in the Data Cache for a specific period.
export async function getDataRevalidatedAfter10Seconds() {

  const response = await fetch('http://localhost:8080/server-api/timestamp2', {
    next: { revalidate: 10 },
    headers: {
      'Auth-Api-Key': process.env.API_KEY || ''
    }
  })
  const result = await response.json() 
  return result
}


// This function shows how to inhibit the Data Cache for a specific fetch() call.
export async function getDataNotCachedV1() {

  const response = await fetch('http://localhost:8080/server-api/timestamp3', {
    cache: 'no-store',
    headers: {
      'Auth-Api-Key': process.env.API_KEY || ''
    }
  })
  const result = await response.json() 
  return result
}


// This function shows how to inhibit the Data Cache for all fetch() calls in a function.
export async function getDataNotCachedV2() {

  noStore()
  
  const response1 = await fetch('http://localhost:8080/server-api/timestamp4', {
    headers: {
      'Auth-Api-Key': process.env.API_KEY || ''
    }
  })
  const result1 = await response1.json() 

  const response2 = await fetch('http://localhost:8080/server-api/timestamp5', {
    headers: {
      'Auth-Api-Key': process.env.API_KEY || ''
    }
  })
  const result2 = await response2.json() 

  return [result1, result2]
}