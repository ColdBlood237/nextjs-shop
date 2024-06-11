import HomePage from "@/pages/HomePage";

async function fetchProducts() {
  const response = await fetch(
    "https://663ce76017145c4d8c381f97.mockapi.io/products"
  ); // change back later
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export default async function page() {
  const data = await fetchProducts();

  return <HomePage data={data} />;
}
