import { createContext } from "react";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const AppleProductsContext = createContext({
  appleProducts: [],
  setAppleProducts: () => {},
});

export const BeatsProductsContext = createContext({
  beatsProducts: [],
  setBeatsProducts: () => {},
});

export const SamsungProductsContext = createContext({
  samsungProducts: [],
  setSamsungProducts: () => {},
});

export const GoogleProductsContext = createContext({
  googleProducts: [],
  setGoogleProducts: () => {},
});

export const PriceOrderContext = createContext({
  priceOrder: "desc",
  setPriceOrder: () => {},
});

export const SelectedCategoryContext = createContext({
  selectedCategory: "none",
  setSelectedCategory: () => {},
});
