import { useEffect, useState } from 'react'
import { useProducts } from '../context/ProductContext'
import styles from "./ProductsPage.module.css"
import Card from '../components/Card';
import Loader from '../components/Loader';
import { createQueryObject, filteredProducts, getInitialQuery, searchProducts } from '../helpers/helper';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import SideBar from '../components/SideBar';

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState(""); 
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams))
  }, [products])

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
     let finalProducts = searchProducts(products, query.search);
     finalProducts = filteredProducts(finalProducts, query.category)
     setDisplayed(finalProducts)
  }, [query])

   
  return (
    <>
    <SearchBox search = {search} setSearch = {setSearch} setQuery = {setQuery} />
    <div className={styles.container}>
      <div className={styles.products}>
        {!displayed.length && <Loader/>}
        {displayed.map(p => (
          <Card key={p.id} data={p}></Card>
        ))}
      </div>
      <SideBar setQuery = {setQuery} query ={query} />
    </div>
    </>
  )
  
}

export default ProductsPage