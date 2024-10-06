import { Countries } from "../../_model/countries-and-cities";

interface ThisRouteParams {
  country: string,
  city: string
}

interface ThisProps {
  params: ThisRouteParams
}
  
export default function City({params}: ThisProps) {

  const {country, city} = params

  let cityDetails = Countries.getCity(country, city)

  if (!cityDetails) {
    return (
      <div>
        <h1>{city} in {country} not found</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{city} in {country}</h1>
      <div>Population: {cityDetails.population}</div>    
      <div>Longitude: {cityDetails.longitude}</div>    
      <div>Latitude: {cityDetails.latitide}</div>    
    </div>
  )
}