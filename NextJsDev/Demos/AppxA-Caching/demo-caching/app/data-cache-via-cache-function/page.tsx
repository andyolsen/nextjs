import RefreshRouteNow from "../_components/refreshRouteNow";
import { getDataNoRevalidation, getDataRevalidatedAfter10Seconds, getData } from "./getData";

export const dynamic = 'force-dynamic'

export default async function DataCacheViaCacheFunction() {

  const data1 = await getDataNoRevalidation()
  const data2 = await getDataRevalidatedAfter10Seconds()
  const data3 = await getData()

  return (
  <>
    <h1>Data Cache via cache()</h1>
    <div>Product count {data1.count}, timestamp {data1.timestamp} (no revalidation)</div>
    <div>Product count {data2.count}, timestamp {data2.timestamp} (revalidated after 10 seconds)</div>
    <div>Product count {data3.count}, timestamp {data3.timestamp} (not cached)</div>

    <RefreshRouteNow />
  </>
  )
}