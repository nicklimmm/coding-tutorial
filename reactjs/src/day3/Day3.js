import { useState, useEffect } from "react";
import Card from "./Card";

/* 
TASK

- Create a rating filter
- Create a search bar to find products using a keyword
- Display product category beside price
*/

const Day3 = () => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999999);

  // Only fetch when loading the page for the first time
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <>
      <div className="filter">
        <label htmlFor="minprice">Min Price</label>
        <input
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          type="number"
          name="minprice"
          id="minprice"
        />
        <label htmlFor="maxprice">Max Price</label>
        <input
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          type="number"
          name="maxprice"
          id="maxprice"
        />
      </div>
      <div className="products">
        {products
          .filter((value) => value.price >= minPrice && value.price <= maxPrice)
          .map((value) => (
            <Card key={value.id} {...value} />
          ))}
      </div>
    </>
  );
};

export default Day3;
