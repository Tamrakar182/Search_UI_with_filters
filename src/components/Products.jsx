const Products = ({products}) => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="card">
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
