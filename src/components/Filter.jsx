import { useState, useEffect } from "react";
import Products from "./Products";
import SearchBox from "./SearchBox";
import KeyBindingHints from "./KeyBindingHints";
import { getProducts } from "../services/Products";
import Price from "./Price";
import Category from "./Category";

const Filter = ({handleShowFilter}) => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setSelectedProducts(data);
    });
  }, []);

  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.keyCode === 27) {
        handleShowFilter();
      }
    };

    const handleArrowKeyPress = (event) => {
      if (event.keyCode === 38) {
        // Up arrow key
        setHighlightedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (event.keyCode === 40) {
        // Down arrow key
        setHighlightedIndex((prevIndex) =>
          prevIndex < selectedProducts.length - 1 ? prevIndex + 1 : prevIndex
        );
      }
    };

    const handleEnterKeyPress = (event) => {
      if (event.keyCode === 13) {
        // Enter key
        if (highlightedIndex !== -1) {
          const highlightedProductName = selectedProducts[highlightedIndex].title;
          setSearchText(highlightedProductName);
        }
      }
    };
    

    const handleClickOutside = (event) => {
        const searchPopUp = document.querySelector(".searchPopUp");
        if (!searchPopUp.contains(event.target)) {
          handleShowFilter();
        }
      };

    document.addEventListener("keydown", handleEscKeyPress);
    document.addEventListener("keydown", handleEnterKeyPress);
    document.addEventListener("keydown", handleArrowKeyPress);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
      document.removeEventListener("keydown", handleEnterKeyPress);
      document.removeEventListener("keydown", handleArrowKeyPress);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleShowFilter, selectedProducts.length, highlightedIndex]);

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    if (selectedCategory === "All") {
      setSelectedProducts(products);
    } else {
      setSelectedProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  };

  const handlePrice = (event) => {
    const selectedPrice = event.target.value;
    setSelectedPrice(selectedPrice);

    if (selectedPrice === "All") {
      setSelectedProducts(products);
    } else {
      setSelectedProducts(
        products.filter((product) => product.price < selectedPrice)
      );
    }
  };
  const filteredProducts = selectedProducts.filter((product) => {
    const productTitle = product.title.toLowerCase();
    const lowercaseSearchText = typeof searchText === 'string' ? searchText.toLowerCase() : '';
    return productTitle.includes(lowercaseSearchText);
  });

  const handleEnterKeyPress = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);
    if (selectedProduct) {
      setSearchText(selectedProduct.title);
      console.log("Product selected:", selectedProduct.title);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="searchPopUp">
        <div className="header">
          <SearchBox
            searchText={searchText}
            handleSearchText={handleSearchText}
            setSearchText={setSearchText}
          />
        </div>

        <div className="selectedDropDown">
          <Category
            category={selectedCategory}
            handleCategory={handleCategory}
          />
          <Price price={selectedPrice} handlePrice={handlePrice} />
        </div>
        <div className="content">
        <KeyBindingHints />
        {products.length === 0 ? (
          <p>Loading...</p> 
        ) : (
          <Products
            products={filteredProducts}
            highlightedIndex={highlightedIndex}
            handleEnterKeyPress={handleEnterKeyPress}
          />
        )}
        
      </div>
    </div>
    </div> )
};

export default Filter;
