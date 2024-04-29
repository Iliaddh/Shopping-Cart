import React from 'react'
import { useEffect } from 'react';

const ProductContext = createContext();

function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try{
            const fetchProducts = async () => {
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

export default ProductsProvider