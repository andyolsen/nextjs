import Employees from "./employees"
import EmployeesSummary from "./employeesSummary"

export const dynamic = 'force-dynamic'

export default async function RequestMemoizationViaCacheFunction() {

  try {
    return (
      <>
        <h1>Request Memoization via cache()</h1>
        <Employees />
        <EmployeesSummary />
      </>
    )
  }
  catch (err) {
    console.log(err)
    return (
      <>
        <h1>Request Memoization via cache()</h1>
        <div>Error occurred. Make sure the database is running 😮</div>
      </>
    )
  }
}