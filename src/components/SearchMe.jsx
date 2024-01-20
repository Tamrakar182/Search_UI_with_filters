import Filter from "./Filter";
import { useState, useEffect } from "react";

const SearchMe = () => {
    const [showFilter, setShowFilter] = useState(false);    
        const handleShowFilter = () => {
            setShowFilter(!showFilter);
        };

    useEffect(() => {
        const handleCtrlKeyPress = (event) => {
          if (event.ctrlKey && event.key === 'm') {
            handleShowFilter();
          }
        }

        document.addEventListener("keydown", handleCtrlKeyPress);

        return () => {
            document.removeEventListener("keydown", handleCtrlKeyPress);
        }

    }, [handleShowFilter]);


    return (
        <div className="input-container">
        <input onClick={handleShowFilter} className="input-field"/>
        <p className="shortcut-button"><div class="shortcut-text">Ctrl+M</div></p>
        {showFilter ? <Filter handleShowFilter={handleShowFilter}/> : null}
        </div>
        
    )
}

export default SearchMe