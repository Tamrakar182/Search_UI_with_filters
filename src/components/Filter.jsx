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

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(event.target.value);

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
    setSelectedPrice(event.target.value);

    if (selectedPrice === "All") {
      setSelectedProducts(products);
    } else {
      setSelectedProducts(
        products.filter((product) => product.price < selectedPrice)
      );
    }
  };

  const filteredProducts = selectedProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="popup-overlay" onClick={handleShowFilter}>
      <div className="searchPopUp">
        <div className="header">
          <SearchBox
            searchText={searchText}
            handleSearchText={handleSearchText}
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
        <Products products={filteredProducts} />
        </div>
        
      </div>
    </div>
  );
};

export default Filter;
