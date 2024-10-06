export const dynamic = 'force-dynamic'

export default function RouterCacheDynamicRouteDemo() {
  
  let ts = new Date()

  return (
    <>
      <h1>Router Cache demo [dynamic route]</h1>
      <div>Date: {ts.toDateString()}, time: {ts.toTimeString()}</div>
    </>
  )
}