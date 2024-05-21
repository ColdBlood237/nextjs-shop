"use client";

import { useContext, useEffect, useState } from "react";
import {
  PriceOrderContext,
  ProductsContext,
  SelectedCategoryContext,
} from "../context/Contexts";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { products, setProducts } = useContext(ProductsContext);
  const { priceOrder, setPriceOrder } = useContext(PriceOrderContext);
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext
  );
  const [selectedOrder, setSelectedOrder] = useState("dec");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log(products);
  }, [products]);

  function handleRadioChange(e: { [keys: string]: any }) {
    console.log(e.target.value);
    setSelectedOrder(e.target.value);
    setPriceOrder((priceOrder: string) => (priceOrder === "dec" ? "inc" : "dec"));
  }

  function sortByPriceAscending(): void {
    // Create a shallow copy of the original array
    const newArray = products.slice();
    for (let i = 0; i < newArray.length - 1; i++) {
      for (let j = 0; j < newArray.length - i - 1; j++) {
        if (newArray[j].price > newArray[j + 1].price) {
          // Swap the elements
          let temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
        }
      }
    }
    setProducts(newArray);
  }

  function sortByPriceDescending(): void {
    // Create a shallow copy of the original array
    const newArray = products.slice();
    for (let i = 0; i < newArray.length - 1; i++) {
      for (let j = 0; j < newArray.length - i - 1; j++) {
        if (newArray[j]?.price < newArray[j + 1]?.price) {
          // Swap the elements
          let temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
        }
      }
    }
    setProducts(newArray);
  }

  useEffect(() => {
    if (priceOrder === "inc") {
      sortByPriceAscending();
    } else {
      sortByPriceDescending();
    }
  }, [priceOrder]);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8">Products list</h1>
      <p className="underline">filters:</p>
      <div className="w-1/2 mx-auto flex justify-between mb-6">
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text">price decreasing</span>
            <input
              type="radio"
              name="priceOrder"
              value="dec"
              className="radio checked:bg-red-500"
              checked={selectedOrder === "dec"}
              onChange={handleRadioChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text">price increasing</span>
            <input
              type="radio"
              name="priceOrder"
              value="inc"
              className="radio checked:bg-blue-500"
              checked={selectedOrder === "inc"}
              onChange={handleRadioChange}
            />
          </label>
        </div>
      </div>
      <select
        className="select select-bordered w-full max-w-xs mb-8"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="none">---</option>
        <option value="Google">Google</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Beats">Beats</option>
      </select>
      <label className="input input-bordered flex items-center max-w-xs mx-auto gap-2 mb-8">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="mx-auto flex flex-wrap justify-around">
        {products[0] !== undefined && selectedCategory === "none"
          ? products
              .filter(
                (product: {
                  id: string;
                  name: string;
                  description: string;
                  image: string;
                  price: number;
                }) =>
                  product?.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase().trim())
              )
              .map(
                (product: {
                  id: string;
                  name: string;
                  description: string;
                  image: string;
                  price: number;
                }) => <ProductCard key={product.id} product={product} />
              )
          : products
              .filter(
                (product: {
                  id: string;
                  name: string;
                  description: string;
                  image: string;
                  price: number;
                }) => product?.name.startsWith(selectedCategory)
              )
              .filter(
                (product: {
                  id: string;
                  name: string;
                  description: string;
                  image: string;
                  price: number;
                }) =>
                  product.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase().trim())
              )
              .map(
                (product: {
                  id: string;
                  name: string;
                  description: string;
                  image: string;
                  price: number;
                }) => <ProductCard key={product.id} product={product} />
              )}
      </div>
    </div>
  );
}
