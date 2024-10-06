'use client'

import { useState, useEffect } from 'react';
import styles from './react-hooks.module.css'

interface IProduct {
	description: string,
	price: number,
	category: string
}

export default function ReactHooks() {

	const categories = ['', 'Food/beverage', 'Clothing', 'Audio/visual']

	// Use React state to hold all the products data.
	let [products, setProducts] = useState<IProduct[]>([])

	// Use React state to track current UI input (i.e. this is a "controlled component").
	let [description, setDescription] = useState('')
	let [price, setPrice] = useState('')
	let [category, setCategory] = useState('')

	// Use a React effect to do some non-UI work.
	useEffect(() => {
		console.log(`Products updated. There are now ${products.length} product(s) dude.`)
	}, [products])

	function onAddProduct() {
		const newProduct = { description, price: Number(price), category }
		setProducts([...products, newProduct])
		setDescription('')
		setPrice('')
		setCategory('')
	}

	return (
		<>
			<h1>React hooks demo</h1>

			<div className={styles.formLine}>
				<label>Description</label>
				<input type='text' value={description} onChange={e => setDescription(e.target.value)} />
			</div>

			<div className={styles.formLine}>
				<label>Price</label>
				<input type='number' value={price} onChange={e => setPrice(e.target.value)} />
			</div>

			<div className={styles.formLine}>
				<label>Category</label>
				<select value={category} onChange={e => setCategory(e.target.value)}>
				{
					categories.map((c, i) => <option value={c} key={i}>{c}</option>)
				}
				</select>
			</div>

			<div className={styles.formLine}>
				<button onClick={onAddProduct}>Add Product</button>
			</div>

			<ProductsPanel products={products} />
		</>
	)
}

function ProductsPanel({ products }: { products: IProduct[] }) {
	return (
		<div hidden={products.length === 0}>
			<h2>Products</h2>
			<ul>
			{
				products.map((p, i) => <li key={i}>{p.description}, &pound;{p.price}, {p.category} </li>)
			}
			</ul>
		</div>
	);
}