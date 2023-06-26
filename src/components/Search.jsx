import { useState } from 'react'

const Search = () => {
    const [searchText, setSearchText] = useState("")

    const handleSearchText = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <>
            <form className='searchContainer'>
                <input className='searchField' value={searchText} onChange={handleSearchText} />
            </form>
        </>
    )
}

export default Search