
import { ImSearch } from 'react-icons/im';
import { createQueryObject } from '../helpers/helper';
import styles from "./SearchBox.module.css"

function SearchBox({search, setSearch, setQuery}) {
    const searchHandler = (query) => {

        setQuery(query => createQueryObject(query, {search}))
        console.log(query)
      }
  return (
    <div className={styles.search}>
      <input 
        type="text" 
        placeholder='Search...' 
        value={search} 
        onChange={e => setSearch(e.target.value.toLowerCase().trim())} 
        />
      <button onClick={searchHandler}>
        <ImSearch/>
      </button>
    </div>
  )
}

export default SearchBox