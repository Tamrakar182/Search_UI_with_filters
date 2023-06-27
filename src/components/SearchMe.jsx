import Filter from "./Filter";
import { useState, useEffect } from "react";

const SearchMe = () => {
    const [showFilter, setShowFilter] = useState(false);
    
    
        const handleShowFilter = () => {
            setShowFilter(!showFilter);
        };

    useEffect(() => {
        const handleCtrlKeyPress = (event) => {
          if (event.keyCode === 17) {
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
        <img src="./src/assets/ctrl.svg" className="shortcut-button"/>
        {showFilter ? <Filter handleShowFilter={handleShowFilter}/> : null}
        </div>
        
    )
}

export default SearchMe