const Products = ({ products, highlightedIndex, handleEnterKeyPress }) => {
  const handleProductClick = (productId) => {
    handleEnterKeyPress(productId);
  };
  
  return (
    <>
      <ul>
        {products.map((product, index) => (
          <li
            key={product.id}
            className={`card ${index === highlightedIndex ? "highlighted" : ""}`}
            onClick={() => handleProductClick(product.id)}
          >
            <img
              className="productImage"
              src={product.image}
              alt={product.title}
            />
            <div className="productDetails">
              <span className="productHeading">{product.title}</span>
              <br />
              <span className="productPricing">{product.price}$</span>
              <br />
              <span className="productCategory">{product.category}</span>
              <br />
              <span className="productDescription">{product.description}</span>
              <br />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
