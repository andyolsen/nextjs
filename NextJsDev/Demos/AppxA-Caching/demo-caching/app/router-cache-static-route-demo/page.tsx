export default function RouterCacheStaticRouteDemo() {
  
  let ts = new Date()

  return (
    <>
      <h1>Router Cache demo [static route]</h1>
      <div>Date: {ts.toDateString()}, time: {ts.toTimeString()}</div>
    </>
  )
}