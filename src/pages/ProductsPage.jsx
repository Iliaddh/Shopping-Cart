import React from 'react'
import { useProducts } from '../context/ProductContext'
import styles from "./ProductsPage.module.css"
import Card from '../components/Card';

function ProductsPage() {
  const products = useProducts();
   
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {products.map(p => (
          <Card key={p.id} data={p}></Card>
        ))}
      </div>
    </div>
  )
  
}

export default ProductsPage