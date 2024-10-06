export default function Layout({
  barchart,
  piechart,
  scatter
}: Readonly<{
  barchart: React.ReactNode,
  piechart: React.ReactNode,
  scatter: React.ReactNode
}>) {
  return (
    <>
      <h1>Side-by-side visualizations</h1>
      {barchart}
      {piechart}
      {scatter}
      <hr/>
      <div>This layout receives 3 slots as props (barchart, piechart, scatter) and displays them all, side-by-side</div>
    </>
  );
}