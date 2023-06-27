const Price = ({ price, handlePrice }) => {
  const prices = ["All", 20, 50, 100, 200];
  return (
    <>
      <label htmlFor="prices">Price:</label>
      <select name="prices" id="prices" value={price} onChange={handlePrice}>
        {prices.map((price) =>
          "All" !== price ? (
            <option key={price} value={price}>
              less than ${price}
            </option>
          ) : (
            <option key={price} value={price}>
              Show All
            </option>
          )
        )}
      </select>
    </>
  );
};

export default Price;
