import { getProducts } from "@/api/products.api";
import ResponsiveGridProductsView from "@/components/ResponsiveGridProductsView";

export default async function Home() {
  const products = await getProducts();

  return <>
    <h2 className="font-bold text-3xl text-center my-12">
      Trending
    </h2>
    <ResponsiveGridProductsView brandId={null} products={products}/>
  </>
}

