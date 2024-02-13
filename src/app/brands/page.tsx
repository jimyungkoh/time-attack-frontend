import ResponsiveGridProductsView from "@/components/ResponsiveGridProductsView";
import ResponsiveGridBrandsView from "./_components/ResponsiveGridBrandsView";

export default function BrandsPage() {
    return (
        <>
            <h2 className="font-bold text-3xl text-center my-12">
                Brands
            </h2>
            <ResponsiveGridBrandsView/>
            <ResponsiveGridProductsView/>
        </>
    );
}
