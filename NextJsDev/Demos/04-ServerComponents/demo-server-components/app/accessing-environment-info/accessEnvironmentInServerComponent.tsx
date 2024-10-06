export default function AccessEnvServerComponent() {
  return (
    <>
        <h2>Access environment in a server component</h2>
        <div>NEXT_PUBLIC_SALES_TAX_RATE is {process.env.NEXT_PUBLIC_SALES_TAX_RATE}</div>
        <div>API_KEY is {process.env.API_KEY}</div>
    </>
  )
}