/* eslint-disable react/prop-types */
import { useContext } from "react";
import Link from "next/link";
import { SelectedCategoryContext } from "../context/Contexts";

export default function Category({
  name,
  products,
}: {
  name: string;
  products: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }[];
}) {
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext
  );

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-6">
      <div className="card-body">
        <h2 className="card-title">{name}!</h2>
        <ul>
          {products.slice(0, 5).map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
        <div className="card-actions justify-end">
          <Link href="/products" onClick={() => setSelectedCategory(name)}>
            <button className="btn btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
