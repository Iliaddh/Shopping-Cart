import { useState } from 'react' 
import './App.css'
import { Routes, Route , Navigate} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductsProvider from './context/ProductContext'
import CartProvider from './context/CartContext'
import DetailsPage from "../src/pages/DetailsPage"
import CheckoutPage from "../src/pages/CheckoutPage"
import PageNotFound from "../src/pages/PageNotFound"

function App() { 

  return (
   <CartProvider>
    <ProductsProvider>
      <Routes>
        <Route index element={<Navigate to="/products" replace/>} />
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<DetailsPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/*" element={<PageNotFound/>}/>

      </Routes>
    </ProductsProvider>
    </CartProvider>  
  )
}

export default App
