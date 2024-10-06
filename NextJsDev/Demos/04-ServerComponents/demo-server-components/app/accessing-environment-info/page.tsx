import AccessEnvironmentInServerComponent from "./accessEnvironmentInServerComponent"
import AccessEnvironmentInClientComponent from "./accessEnvironmentInClientComponent"

export default function AccessingEnvironmentInfo() {
  
  return (
    <>
      <h1>Accessing environment info</h1>
      <AccessEnvironmentInServerComponent />
      <AccessEnvironmentInClientComponent />
    </>
  )
}