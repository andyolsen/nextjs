import RefreshRouteNow from "../_components/refreshRouteNow";
import { getDataNoRevalidation, getDataRevalidatedAfter10Seconds, getDataNotCachedV1, getDataNotCachedV2  } from "./getData";

export const dynamic = 'force-dynamic'

export default async function DataCacheViaFetchFunction() {

  const data1 = await getDataNoRevalidation()
  const data2 = await getDataRevalidatedAfter10Seconds()
  const data3 = await getDataNotCachedV1()
  const data4 = await getDataNotCachedV2()

  return (
  <>
    <h1>Data Cache via fetch()</h1>
    <div>{data1} (no revalidation)</div>
    <div>{data2} (revalidated after 10 seconds)</div>
    <div>{data3} (not cached)</div>
    <div>{data4[0]} (not cached)</div>
    <div>{data4[1]} (not cached)</div>

    <RefreshRouteNow />
  </>
  )
}