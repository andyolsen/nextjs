export class ProductItem {
  constructor(
    public id: string,
    public description: string,
    public category: string,
    public price: number,
    public likes: number,
    public mostRecentLike: string)
    {}
}

export class Catalog {

  // Let's just store data in static variables for simplicity here!
  private static productItems: Map<string, ProductItem> = new Map([
    ["1", new ProductItem("1", "Swansea City Shirt", "sportswear", 55.99, 20000, "2024-07-01")],
    ["2", new ProductItem("2", "Cardiff City Shirt", "sportswear", 49.99, 15000, "1927-05-31")],
    ["3", new ProductItem("3", "Bugatti Divo Sport", "auto", 4_000_000, 4, "2023-12-25")],
  ])

  static getAllProductItems() : Array<ProductItem> {
    let productItemsAsIterable = Catalog.productItems.values()
    return Array.from(productItemsAsIterable)
  }

  static getProductItemById(id: string) : ProductItem | undefined {
    return Catalog.productItems.get(id)
  }
}