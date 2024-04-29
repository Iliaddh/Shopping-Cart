import { useState } from 'react' 
import './App.css'
import { Routes, Route , Navigate} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductsProvider from './context/ProductContext'

function App() { 

  return (
    <ProductsProvider>
      <Routes>
        <Route index element={<Navigate to="/products" replace/>} />
        <Route path="/products" element={<ProductsPage/>}/>

      </Routes>
    </ProductsProvider>
  )
}

export default App
