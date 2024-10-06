import mysql, { RowDataPacket } from 'mysql2/promise'

// By default, Next.js attempts to render server components statically (i.e. at build-time).
// This server component accesses a MySQL database that will only be available at run-time, 
// so we must force Next.js to render dynamically (i.e. at run-time).
export const dynamic = 'force-dynamic'

export default async function AccessingDatabase() {

  try {

    const con = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD
    })

    const [rows] = await con.query<RowDataPacket[]>('SELECT * FROM myschema.employees')

    return (
      <>
        <h1>Accessing a database directly</h1>
        <h2>Employees</h2>
        <ul>
        {
          rows.map((row, i) => 
            <li key={i}>
              [{row.id}] {row.name}, {row.region}, &pound;{row.salary}
            </li>
          ) 
        }
        </ul>
      </>
    )
  }
  catch (err) {
    console.log(err)
    return (
      <>
        <h1>Accessing a database directly</h1>
        <div>Error occurred. Make sure the database is running 😮</div>
      </>
    )
  }
}