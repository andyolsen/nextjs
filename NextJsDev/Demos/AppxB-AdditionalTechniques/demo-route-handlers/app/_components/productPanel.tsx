import IProduct from '../_model/product'
import styles from './productPanel.module.css'

export default function ProductPanel(prod: IProduct) {

    return (
        <div className={styles.panel}>
            <h2>{prod.description}</h2>
            <div>Id: {prod.id}</div>
            <div>Category: {prod.category}</div>
            <div>Price: {prod.price}</div>
        </div>
    )
}