/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/selectedCategorySlice";
import Link from "next/link";

export default function Category({ name, products }) {
  const dispatch = useDispatch();

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
          <Link href="/products" onClick={dispatch(setSelectedCategory(name))}>
            <button className="btn btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
