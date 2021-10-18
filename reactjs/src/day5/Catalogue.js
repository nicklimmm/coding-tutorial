import { useState, useEffect } from "react";
import Card from "../day3/Card";
import axios from "axios";

// Taken from Day3
const Catalogue = () => {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999999);

  useEffect(() => {
    // Using axios to get API data

    // then/catch method
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((res) => setProducts(res.data))
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // Async/await method
    const loadProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
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

export default Catalogue;
