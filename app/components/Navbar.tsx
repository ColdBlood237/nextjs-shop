"use client";

import Link from "next/link";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import {
  AppleProductsContext,
  BeatsProductsContext,
  GoogleProductsContext,
  ProductsContext,
  SamsungProductsContext,
} from "../context/Contexts";

export default function Navbar({ children }: any) {
  const { products, setProducts } = useContext(ProductsContext);
  const { appleProducts, setAppleProducts } = useContext(AppleProductsContext);
  const { beatsProducts, setBeatsProducts } = useContext(BeatsProductsContext);
  const { googleProducts, setGoogleProducts } = useContext(GoogleProductsContext);
  const { samsungProducts, setSamsungProducts } = useContext(SamsungProductsContext);

  function fillMissingData() {
    const productsInfo = [
      {
        price: 400,
        description:
          "Google Pixel 6 Pro 5G Se il dispositivo è caldo. Tuttavia, questo è prevedibile e può essere caldo, soprattutto quando si riproducono video, giochi o altri media.",
        image:
          "https://m.media-amazon.com/images/I/51IOgjuH61L._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      },
      {
        price: 450,
        description:
          "Questo prodotto usato o ricondizionato è stato ispezionato e testato professionalmente per funzionare e apparire come nuovo.",
        image: "https://m.media-amazon.com/images/I/71sNNCTfMuL._AC_SL1500_.jpg",
      },
      {
        price: 800,
        description: "nice phone",
        image: "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_SL1500_.jpg",
      },
      {
        price: 500,
        description:
          "Come parte dei nostri sforzi per raggiungere i nostri obiettivi ambientali, iPhone 11 non include più un alimentatore o EarPods. Utilizza l'adattatore di alimentazione Apple e le cuffie esistenti o acquista questi accessori separatamente.",
        image: "https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_SL1500_.jpg",
      },
      {
        price: 700,
        description:
          "Sistema a doppia fotocamera da 12MP (ultra-grandangolo e grandangolo) con modalità Notte, modalità Ritratto e registrazione video 4K fino a 60 fps.",
        image: "https://m.media-amazon.com/images/I/716anBvFOfL._AC_SL1500_.jpg",
      },
      {
        price: 100,
        description: "A versatile product suitable for various tasks.",
        image: "https://m.media-amazon.com/images/I/41g4Idd4y9L._AC_SL1024_.jpg",
      },
      {
        price: 1500,
        description: "A high-end product designed for professional use.",
        image: "https://m.media-amazon.com/images/I/612Lxme7LWL._AC_SL1500_.jpg",
      },
      {
        price: 150,
        description: "An affordable option with great features.",
        image: "https://m.media-amazon.com/images/I/71S1lgAvWRL._AC_SL1500_.jpg",
      },
      {
        price: 100,
        description: "A compact and lightweight solution for everyday needs.",
        image: "https://m.media-amazon.com/images/I/61BehGyHzHL._AC_SL1500_.jpg",
      },
      {
        price: 300,
        description: "A durable product built to last.",
        image: "https://m.media-amazon.com/images/I/71uoSV96ToL._AC_SL1500_.jpg",
      },
      {
        price: 350,
        description: "An innovative product with cutting-edge technology.",
        image: "https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SL1500_.jpg",
      },
    ];

    setProducts((products) =>
      products.map((product: { [key: string]: any }, index: number) => {
        return {
          ...product,
          price: productsInfo[index].price,
          description: productsInfo[index].description,
          image: productsInfo[index].image,
        };
      })
    );
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://663ce76017145c4d8c381f97.mockapi.io/products"
      ); // change back later
      const data = await response.json();
      setProducts(data);
      setAppleProducts(
        data.filter((product) => {
          return product?.name.split(" ")[0] === "Apple";
        })
      );
      setBeatsProducts(
        data.filter((product) => {
          return product?.name.split(" ")[0] === "Beats";
        })
      );
      setGoogleProducts(
        data.filter((product) => {
          return product?.name.split(" ")[0] === "Google";
        })
      );
      setSamsungProducts(
        data.filter((product) => {
          return product?.name.split(" ")[0] === "Samsung";
        })
      );
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (
      products.length !== 0 &&
      products[0] !== undefined &&
      products[0].price === undefined
    ) {
      fillMissingData();
      console.log(products);
    }
  }, [products]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href="/">
            NoLogo
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">home page</Link>
            </li>
            <li>
              <Link href="/products">products</Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}
