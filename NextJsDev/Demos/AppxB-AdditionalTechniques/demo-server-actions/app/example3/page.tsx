import { serverConsoleLog, writeMessageToFile } from '../my-server-actions'
import ChildPanel from './childComponentPanel'

export default function Example3() {

  // A server component (like Example3) can define server actions as inline functions.
  // For an inline server action, the function must be async and must include the 'use server' directive.
  // Inline server actions are handy if you only utilize the server action(s) from this component.
  // It means you don't have to create a separate module to house the server action(s).
  async function coolInlineAction() {
    'use server'
    console.log('\r\nHowdy from an inline server action 😀')
  }

  return (
    <>
      <h1>Example 3</h1>
      <ChildPanel serverActionToCall={serverConsoleLog} />
      <ChildPanel serverActionToCall={writeMessageToFile} />
      <ChildPanel serverActionToCall={coolInlineAction} />
    </>
  )
}