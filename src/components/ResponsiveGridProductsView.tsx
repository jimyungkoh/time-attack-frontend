"use client"

import { getProducts } from "@/api/products.api";
import { useQuery } from "@tanstack/react-query";
import ResponsiveGridProductsViewItem from "./ResponsiveGridProductsViewItem";

export default function ResponsiveGridProductsView() {
    const { data } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const products = data;

    return (
         products && <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
                {products.map(product => (
                    <ResponsiveGridProductsViewItem key={product.id} product={product}></ResponsiveGridProductsViewItem>
                ))}
            </ul>
    );
}
