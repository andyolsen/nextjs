export default function Layout({
  barchart,
  piechart,
  scatter
}: Readonly<{
  barchart: React.ReactNode,
  piechart: React.ReactNode,
  scatter: React.ReactNode
}>) {

  const num = luckyDip(3)

  let content: React.ReactNode
  if (num === 0) {
    content = barchart
  } 
  else if (num === 1) {
    content = piechart
  }
  else {
    content = scatter
  }

  return (
    <>
      <h1>One or other visualization [{num}]</h1>
      {content}
      <hr/>
      <div>This layout receives 3 slots as props (barchart, piechart, scatter) and displays one at random</div>
    </>
  );
}

function luckyDip(numOptions: number) {
  return Math.floor(Math.random() * numOptions)
}
