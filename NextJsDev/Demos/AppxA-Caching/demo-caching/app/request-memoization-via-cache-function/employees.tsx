import { cachedGetData } from './getData'

export default async function Employees() {

  const [rows] = await cachedGetData()

  return (
    <>
      <h3>Employees</h3>
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