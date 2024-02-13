"use client"

import ResponsiveGridProductsView from "@/components/ResponsiveGridProductsView";
import { useSearchParams } from "next/navigation";
import ResponsiveGridBrandsView from "./_components/ResponsiveGridBrandsView";

export default function BrandsPage() {
    const searchBrandId = useSearchParams().get("brandId");
    
    return (
        <>
            <h2 className="font-bold text-3xl text-center my-12">
                Brands
            </h2>
            <ResponsiveGridBrandsView activeBrandId={!searchBrandId ? null : parseInt(searchBrandId)} />
            <ResponsiveGridProductsView brandId={null} />
        </>
    );
}
