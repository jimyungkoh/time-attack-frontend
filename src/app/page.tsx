import ResponsiveGridProductsView from "@/components/ResponsiveGridProductsView";

export default function Home() {
  return <>
    <h2 className="font-bold text-3xl text-center my-12">
      Trending
    </h2>
    <ResponsiveGridProductsView brandId={null}/>
  </>
}

