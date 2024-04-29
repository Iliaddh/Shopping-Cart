import React, { useContext } from 'react'
import { useEffect, useState, createContext } from 'react';
import api from "../services/config"

const ProductContext = createContext();

function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try{
            var fetchProducts = async () => {
                const response = await api.get("/products");
                setProducts(response);
            }
        }catch(error){
            console.log(error.message);
        }
        fetchProducts();
    }, [])
  return <ProductContext.Provider value = {products}>{children}</ProductContext.Provider>
  
}

const useProducts = () => {
    const products = useContext(ProductContext)
    return products;
}
export default ProductsProvider
export {useProducts}