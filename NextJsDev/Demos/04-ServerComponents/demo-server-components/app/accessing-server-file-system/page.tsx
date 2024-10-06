import fs from 'node:fs'
import parse from 'html-react-parser'

// This must be a server component, because it accesses a server-side file.
// If the server-side file exists at build-time, we can use static rendering (for efficiency),
// i.e. we don't have the following statement:
//   export const dynamic = 'force-dynamic'

export default function AccessingServerFileSystem() {
  
  const fileName = 'welshAnthem.txt'
  const fileContent = fs.readFileSync(fileName, 'utf8')
  const fileContentParsedAsHtml = parse(fileContent)

  return (
    <>
      <h1>Accessing the server file system directly</h1>
      <h2>Content of {fileName}:</h2>
      <div>{fileContentParsedAsHtml}</div>
    </>
  )
}