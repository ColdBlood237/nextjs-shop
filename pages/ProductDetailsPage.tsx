"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetailsPage() {
  // const [currentProduct, setCurrentProduct] = useState(
  //   products[products.findIndex((product) => product.id === params.id)]
  // );

  const searchParams = useSearchParams();
  const product = JSON.parse(searchParams.get("product"));
  const products = JSON.parse(searchParams.get("products"));
  console.log(product);
  console.log(products);

  const [currentProduct, setCurrentProduct] = useState(product);
  const [productsState, setProductsState] = useState(products);

  const [editMode, setEditMode] = useState(false);
  const [nameInput, setNameInput] = useState(currentProduct.name);
  const [imgInput, setImgInput] = useState(currentProduct.image);
  const [priceInput, setPriceInput] = useState(currentProduct.price);
  const [descriptionInput, setDescriptionInput] = useState(
    currentProduct.description
  );

  function modifyOneProduct(newProduct: any): void {
    const index = productsState.findIndex(
      (object: any) => object.id === newProduct.id
    );
    setProductsState((products: any) => {
      return [...products.slice(0, index), newProduct, ...products.slice(index + 1)];
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    modifyOneProduct({
      id: currentProduct.id,
      name: nameInput,
      image: imgInput,
      price: priceInput,
      description: descriptionInput,
    });
    setCurrentProduct({
      id: currentProduct.id,
      name: nameInput,
      image: imgInput,
      price: priceInput,
      description: descriptionInput,
    });
    setEditMode(false);
  }

  return (
    <>
      {editMode ? (
        <form
          className="flex flex-col w-96 mx-auto mt-12 gap-4"
          onSubmit={handleSubmit}
        >
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="grow"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Img URL
            <input
              type="text"
              value={imgInput}
              onChange={(e) => setImgInput(e.target.value)}
              className="grow"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            price
            <input
              type="number"
              min="0"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              className="grow"
              required
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
              className="textarea textarea-bordered h-24"
              required
            ></textarea>
          </label>
          <div className="flex justify-end gap-2">
            <button onClick={() => setEditMode(false)} className="btn btn-error">
              cancel
            </button>
            <button type="submit" className="btn btn-primary">
              send
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col mx-auto gap-8 w-96">
          <h1 className="text-3xl">{currentProduct.name}</h1>
          <img
            className="w-96"
            src={currentProduct.image}
            alt={currentProduct.name}
          />
          <p className="text-2xl">{currentProduct.price} €</p>
          <p>{currentProduct.description}</p>
          <button onClick={() => setEditMode(true)} className="btn">
            edit
          </button>
        </div>
      )}
    </>
  );
}
