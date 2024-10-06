import { cachedGetData } from './getData'

export default async function EmployeesSummary() {

  const [rows] = await cachedGetData()

  const numEmployees = rows.length
  const totalWageBill = rows.reduce((sum, currentRow) => sum + currentRow.salary, 0)
  const averageSalary = totalWageBill / numEmployees

  return (
    <>
      <h3>Employees summary</h3>
      <div>Number of employees: {numEmployees}</div>
      <div>Total wage bill: &pound;{totalWageBill}</div>
      <div>Average salary: &pound;{averageSalary}</div>
    </>
  )
}