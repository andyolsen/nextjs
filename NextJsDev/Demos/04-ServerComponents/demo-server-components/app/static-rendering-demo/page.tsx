// By default, Next.js pre-renders route segments statically at build-time.

export default function StaticallyRenderedRouteSegment() {
  
  let ts = new Date()

  return (
    <>
      <h1>Statically rendered route segment</h1>
      <div>Date: {ts.toDateString()}, time: {ts.toTimeString()}</div>
    </>
  )
}