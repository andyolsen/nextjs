import Products from "./products";
import ProductsSlice from "./productsSlice";
import ProductsSummary from "./productsSummary";

export const dynamic = 'force-dynamic'

export default function RequestMemoizationViaFetchFunction() {

  return (
    <div>
      <h1>Request Memoization via fetch()</h1>
      <Products />
      <ProductsSlice sliceSize={3} sortOrder="asc" />
      <ProductsSlice sliceSize={3} sortOrder="desc" />
      <ProductsSummary />
    </div>
  )
}