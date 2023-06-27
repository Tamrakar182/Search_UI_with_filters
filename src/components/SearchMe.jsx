import Filter from "./Filter";
import { useState } from "react";

const SearchMe = () => {
    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <>
        <input onClick={handleShowFilter}/>
        {showFilter ? <Filter handleShowFilter={handleShowFilter}/> : null}
        </>
        
    )
}

export default SearchMe