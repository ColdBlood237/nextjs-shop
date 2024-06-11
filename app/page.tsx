import { useContext, useEffect, useState } from "react";
import Category from "../components/Category";
import Home from "@/pages/HomePage";
import RootLayout from "./layout";

export default async function page({ data }: any) {
  return <Home data={data} />;
}
