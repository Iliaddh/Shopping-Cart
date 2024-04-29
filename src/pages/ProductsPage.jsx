import React from 'react'
import { useProducts } from '../context/ProductContext'
import styles from "./ProductsPage.module.css"

function ProductsPage() {
  const products = useProducts();
  console.log(products)
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products.map(p => <p>{p.title}</p>)}
      </div>
    </div>
  )
  
}

export default ProductsPage