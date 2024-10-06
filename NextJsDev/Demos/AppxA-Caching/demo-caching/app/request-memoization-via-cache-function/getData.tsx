import { cache } from 'react'
import mysql, { RowDataPacket } from 'mysql2/promise'

async function getData() {
  
  console.log("***** Querying database at server *****")
  
  const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD
  })

  return con.query<RowDataPacket[]>('SELECT * FROM myschema.employees')
}

export const cachedGetData = cache(getData)