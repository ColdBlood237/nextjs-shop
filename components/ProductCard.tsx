import Link from "next/link";
import React from "react";

export default function ProductCard({
  product,
  products,
}: {
  product: any;
  products: any;
}) {
  return (
    <div className="card mb-8 w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-24" src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <Link
            href={{
              pathname: `/products/${product.id}`,
              query: {
                product: JSON.stringify(product),
                products: JSON.stringify(products),
              },
            }}
          >
            <button className="btn btn-secondary">see details</button>
          </Link>
          <button className="btn btn-primary disabled">{product.price} €</button>
        </div>
      </div>
    </div>
  );
}
