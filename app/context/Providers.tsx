"use client";

import React, { useState } from "react";
import {
  AppleProductsContext,
  BeatsProductsContext,
  GoogleProductsContext,
  PriceOrderContext,
  ProductIdContext,
  ProductsContext,
  SamsungProductsContext,
  SelectedCategoryContext,
} from "./Contexts";

export default function Providers({ children }) {
  const [products, setProducts] = useState([]);
  const [appleProducts, setAppleProducts] = useState([]);
  const [beatsProducts, setBeatsProducts] = useState([]);
  const [googleProducts, setGoogleProducts] = useState([]);
  const [samsungProducts, setSamsungProducts] = useState([]);
  const [priceOrder, setPriceOrder] = useState("desc");
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [productId, setProductId] = useState(0);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <AppleProductsContext.Provider value={{ appleProducts, setAppleProducts }}>
        <BeatsProductsContext.Provider value={{ beatsProducts, setBeatsProducts }}>
          <GoogleProductsContext.Provider
            value={{ googleProducts, setGoogleProducts }}
          >
            <SamsungProductsContext.Provider
              value={{ samsungProducts, setSamsungProducts }}
            >
              <PriceOrderContext.Provider value={{ priceOrder, setPriceOrder }}>
                <SelectedCategoryContext.Provider
                  value={{ selectedCategory, setSelectedCategory }}
                >
                  <ProductIdContext.Provider value={{ productId, setProductId }}>
                    {children}
                  </ProductIdContext.Provider>
                </SelectedCategoryContext.Provider>
              </PriceOrderContext.Provider>
            </SamsungProductsContext.Provider>
          </GoogleProductsContext.Provider>
        </BeatsProductsContext.Provider>
      </AppleProductsContext.Provider>
    </ProductsContext.Provider>
  );
}
