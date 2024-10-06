// You can force Next.js to render a route segment dynamically at run-time.
// Once rendered, the Next.js client-side Router Cache will cache the route segment for 30 seconds. 
export const dynamic = 'force-dynamic'

export default function DynamicallyRenderedRouteSegment() {
  
  let ts = new Date()

  return (
    <>
      <h1>Dynamically rendered route segment</h1>
      <div>Date: {ts.toDateString()}, time: {ts.toTimeString()}</div>
    </>
  )
}