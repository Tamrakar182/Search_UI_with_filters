import { useState, useEffect } from 'react'
import Products from './Products'
import { getProducts } from "../services/Products";

const Search = () => {
    const [searchText, setSearchText] = useState("")
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getProducts().then((data) => {
        setProducts(data);
      });
    }, []);

    const handleSearchText = (event) => {
        setSearchText(event.target.value)
    }

    const filterProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(searchText.toLowerCase())
        })

    return (
        <>
            <form className='searchContainer'>
                <input className='searchField' value={searchText} onChange={handleSearchText} />
            </form>
            <Products products={filterProducts}/>
        </>
    )
}

export default Search