import { Catalog } from "../../_model/catalog";

interface ThisRouteParams {
  id: string
}

interface ThisRouteSearchParams {
  verbose?: boolean
}
  
interface ThisProps {
  params: ThisRouteParams,
  searchParams: ThisRouteSearchParams 
}
  
export default function Product({ params, searchParams }: ThisProps) {

  const id = params.id
  const verbose = searchParams.verbose

  let prod = Catalog.getProductItemById(id)

  if (!prod) {
    return (
      <div>
        <h1>Product {id} not found</h1>
      </div>
    )
  }

  if (verbose) {
    return (
      <div>
        <h1>Product {id} [verbose]</h1>
        <div>Description: {prod.description}</div>    
        <div>Category: {prod.category}</div>    
        <div>Price: {prod.price}</div>
        <div>Likes: {prod.likes}</div>
        <div>Most recent like: {prod.mostRecentLike}</div>
      </div>
    )
  }
  else {
    return (
		<div>
		  <h1>Product {id} [brief]</h1>
		  <div>Description: {prod.description}</div>    
		  <div>Price: {prod.price}</div>
		</div>
	  )
  }
}