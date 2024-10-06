async function getDataSlooooooowly() {
  
  await new Promise(resolve => setTimeout(resolve, 5000))
  
  return [
    { id: 0, description: "Swansea City shirt", category: "Leisure wear", price: 45 },
    { id: 1, description: "Cardiff City shirt", category: "Leisure wear", price: 5 },
    { id: 2, description: "Bugatti Chiron", category: "Auto", price: 2000000 },
    { id: 3, description: "65 inch UHDTV", category: "TV/Audio", price: 1800 },
    { id: 4, description: "Carving skis", category: "Sports equipment", price: 350 },
    { id: 5, description: "Ski boots", category: "Sports equipment", price: 150 }
  ]
}

export default async function Products() {

  const products = await getDataSlooooooowly()

  return (
    <>
      <h1>Products</h1>
      <ul>
      {
        products.map((p: any, i: number) => <li key={i}>{p.description}</li>)
      }
      </ul>
    </>
  );
}