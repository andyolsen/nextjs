export class City {
  constructor(
    public name: string,
    public population: number,
    public latitide: number,
    public longitude: number)
    {}
}

export class Countries {

  // Let's just store data in static variables for simplicity here!
  private static data: Map<string, City[]> = new Map([
    [
      "UK", 
      [
        new City("London", 9_000_000, 51, 0), 
        new City("Bath", 95_000, 51, -2),
        new City("Swansea", 250_000, 51, -4)
      ] 
    ],
    [
      "Norway", 
      [
        new City("Oslo", 640_000, 59, 10), 
        new City("Bergen", 270_000, 60, 5),
        new City("Honningsvag", 2_500, 71, 25),
      ]
    ],
    [
      "France", 
      [
        new City("Paris", 2_000_000, 48, 2), 
        new City("Marseille", 850_000, 43, 5),
        new City("Nice", 350_000, 43, 7)
      ]
    ]
  ]);

  static getCountryNames() : Array<string> {
    let countriesAsIterable = Countries.data.keys()
    return Array.from(countriesAsIterable)
  }

  static getCitiesInCountry(country: string) : City[] | undefined {
    return Countries.data.get(country)
  }

  static getCity(country: string, city: string) : City | undefined {
    const cities = Countries.data.get(country)
    return cities?.find(c => c.name === city)
  }
}