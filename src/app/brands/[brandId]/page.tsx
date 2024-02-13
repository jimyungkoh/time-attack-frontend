import ResponsiveGridProductsView from "@/components/ResponsiveGridProductsView";
import ResponsiveGridBrandsView from "../_components/ResponsiveGridBrandsView";

export default function BrandPage({params: {brandId}}:{params:{brandId: string}}) {
    return (
        <>
            <h2 className="font-bold text-3xl text-center my-12">
                Brands
            </h2>
            <ResponsiveGridBrandsView activeBrandId={parseInt(brandId)}/>
            <ResponsiveGridProductsView brandId={brandId}/>
        </>
    );
}
