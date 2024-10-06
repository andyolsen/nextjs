import fs from 'node:fs'
import SearchablePanel from "./searchablePanel"

// This must be a server component, because it accesses a server-side file.
// If the server-side file exists at build-time, we can use static rendering (for efficiency),
// i.e. we don't have the following statement:
//   export const dynamic = 'force-dynamic'

export default function MyServerComponent() {
  
  const filename = 'welshAnthem.txt'
  const fileContent = fs.readFileSync(filename, 'utf8')
  const fileReadTimestamp = new Date().toTimeString()

  return (
    <>
      <h1>Passing content from a server component to a client component</h1>
      <SearchablePanel text={fileContent}>
        <hr/>
        <small><b>{filename}</b>, read {fileReadTimestamp}</small>
      </SearchablePanel>
    </>
  )
}