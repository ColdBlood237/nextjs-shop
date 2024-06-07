/* eslint-disable react/prop-types */
import { useState } from "react";
import Link from "next/link";

export default function Category({
  name,
  categoryProducts,
  products,
  setProducts,
}: {
  name: string;
  categoryProducts: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }[];
  products: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }[];
  setProducts: Function;
}) {
  const [selectedCategory, setSelectedCategory] = useState("none");

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-6">
      <div className="card-body">
        <h2 className="card-title">{name}!</h2>
        <ul>
          {categoryProducts.slice(0, 5).map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <Link
            href={{
              pathname: "/products",
              query: {
                selectedCategory: name,
                products: encodeURIComponent(JSON.stringify(products)),
              },
            }}
            onClick={() => setSelectedCategory(name)}
          >
            <button className="btn btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
