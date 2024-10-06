import Link from 'next/link'
import { Countries } from "../_model/countries-and-cities";

export default function CountriesPage() {

  let countryNames = Countries.getCountryNames()

  return (
    <div>
    {
      countryNames.map((countryName, i) =>
          <section key={i}>
            <h1>{countryName}</h1>
            <ul>
            {
              Countries.getCitiesInCountry(countryName)!.map((city, j) => 
                <li key={j}>
                  <Link href={`/${countryName}/${city.name}`}>{city.name}</Link>
                </li>
              )
            }
            </ul>
          </section>
        )
    }
    </div>
    )
}