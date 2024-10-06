export const dynamic = 'force-dynamic' // Ensure the REST APIs are called at run-time, not build-time.

export async function GET() {

  return await fetch('http://localhost:8080/server-api/shops', {
    headers: {
    'Auth-Api-Key': process.env.API_KEY || ''
    },
  })
}