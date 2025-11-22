import React from "react";
import { useState, useEffect } from "react";
import Search from "./search";
import axios from "axios";

const Products = () => {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  let [count, setCount] = useState(1);
  let [search, setSearch] = useState("");

  let fetchProducts = async () => {
    try {
      let data = await axios.get(
        search
          ? `https://dummyjson.com/products/search?q=${search}`
          : "https://dummyjson.com/products"
      );
      console.log(data);
      setProducts(data.data.products);
    } catch (error) {
      console.error("API Fetch Error!", error);
    }
  };

  let addToCart = (id) => {
    console.log(id);
    let findProduct = products.find((item) => item.id === id);
    setCart([...cart, findProduct]);
    setCount(count + 1);
    alert(`${count} Items Added Successfully!`);
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((elm) => (
          <div
            key={elm.id}
            className="border border-slate-200 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden mb-3">
              <img
                src={elm.thumbnail}
                alt={elm.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-slate-900 font-medium mb-2 overflow-hidden line-clamp-2">
              <p>{elm.description}</p>
            </div>
            <div className="text-blue-600 font-bold text-2xl mb-2">
              ${elm.price}
            </div>
            <div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
                onClick={() => addToCart(elm.id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
