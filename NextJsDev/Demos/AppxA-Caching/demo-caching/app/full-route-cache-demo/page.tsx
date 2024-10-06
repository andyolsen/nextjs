export default function FullRouteCacheDemo() {
  
  let ts = new Date()

  return (
    <>
      <h1>Full Route Cache demo</h1>
      <div>Date: {ts.toDateString()}, time: {ts.toTimeString()}</div>
    </>
  )
}