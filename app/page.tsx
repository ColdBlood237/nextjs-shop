"use client";

import { useContext, useEffect } from "react";
import {
  AppleProductsContext,
  BeatsProductsContext,
  GoogleProductsContext,
  ProductsContext,
  SamsungProductsContext,
} from "./context/Contexts";
import Category from "./components/Category";

export default function Homepage() {
  const { products, setProducts } = useContext(ProductsContext);
  const { appleProducts, setAppleProducts } = useContext(AppleProductsContext);
  const { beatsProducts, setBeatsProducts } = useContext(BeatsProductsContext);
  const { googleProducts, setGoogleProducts } = useContext(GoogleProductsContext);
  const { samsungProducts, setSamsungProducts } = useContext(SamsungProductsContext);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8">Home page</h1>
      <h2 className="text-2xl mb-6">categories: </h2>
      <div className="flex flex-wrap justify-around">
        <Category name="Google" products={googleProducts} />
        <Category name="Apple" products={appleProducts} />
        <Category name="Beats" products={beatsProducts} />
        <Category name="Samsung" products={samsungProducts} />
      </div>
    </div>
  );
}
