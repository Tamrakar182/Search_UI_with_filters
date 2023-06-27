import { useEffect, useState } from "react";
import { getAllCategories } from "../services/Categories";

const Category = ({ category, handleCategory }) => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setAllCategories(["All", ...data]);
    });
  }, []);

  return (
    <>
      <label htmlFor="categories">Category:</label>
      <select
        name="categories"
        id="categories"
        value={category}
        onChange={handleCategory}
      >
        {allCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </>
  );
};

export default Category;
