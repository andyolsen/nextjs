import { unstable_cache as cache } from 'next/cache'
import mysql, { RowDataPacket } from 'mysql2/promise'

export async function getData() {
  
  console.log(`***** Getting data from database ***** at ${new Date().toLocaleTimeString()}`)
  
  const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD
  })

  const result = await con.query<RowDataPacket[]>('SELECT COUNT(*) as count FROM myschema.employees')

  return {
    count: result[0][0].count,
    timestamp: new Date().toLocaleTimeString()
  }
}

export const getDataNoRevalidation = cache(
  getData, 
  ["employees-data-no-revalidation"]
)

export const getDataRevalidatedAfter10Seconds = cache(
  getData, 
  ["employees-data-revalidated-after-10-seconds"],
  { revalidate: 10 }
)