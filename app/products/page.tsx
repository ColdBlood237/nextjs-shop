import ProductsListPage from "@/pages/ProductsListPage";

export default function page({ searchParams }: { searchParams: any }) {
  const selectedCategory = searchParams.selectedCategory
    ? searchParams.selectedCategory
    : "none";
  const products = JSON.parse(decodeURIComponent(searchParams.products));

  return (
    <>
      <ProductsListPage products={products} selectedCategory={selectedCategory} />
    </>
  );
}
