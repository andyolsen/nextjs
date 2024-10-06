import RefreshRouteNow from "../_components/refreshRouteNow"

export const dynamic = 'force-dynamic'

export default function RouterCacheDynamicRouteWithRefreshDemo() {
  
  let ts = new Date()

  return (
    <>
      <h1>Router Cache demo [dynamic route with refresh]</h1>
      <div>Date: {ts.toDateString()}, time: {ts.toTimeString()}</div>

      <RefreshRouteNow />
    </>
  )
}