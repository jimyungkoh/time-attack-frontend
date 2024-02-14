import { getBrands } from "@/api/brands.api";
import { getProducts } from "@/api/products.api";
import ResponsiveGridProductsView from "@/components/ResponsiveGridProductsView";
import ResponsiveGridBrandsView from "./_components/ResponsiveGridBrandsView";

export default async function BrandsPage({searchParams: {brandId}}: {searchParams: { brandId?: string }}) {
    const [products, brands] = await Promise.all([getProducts(brandId), getBrands()]);

    return (
        <>
            <h2 className="font-bold text-3xl text-center my-12">
                Brands
            </h2>
            <ResponsiveGridBrandsView activeBrandId={!brandId ? null : parseInt(brandId, 10)} brands={brands}/>
            <ResponsiveGridProductsView brandId={brandId ? brandId : null} products={products} />
        </>
    );
}
