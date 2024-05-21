import React from "react";

export default function ProductCard({ product }) {
  return (
    <div key={product.id} className="card mb-8 w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-24" src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{product.price} €</button>
        </div>
      </div>
    </div>
  );
}
