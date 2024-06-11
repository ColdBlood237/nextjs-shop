import ProductDetailsPage from "@/pages/ProductDetailsPage";

export default function page({ searchParams }: { searchParams: any }) {
  const product = searchParams.product;
  const products = searchParams.products;

  return (
    <>
      <ProductDetailsPage product={product} products={products} />
    </>
  );
}
