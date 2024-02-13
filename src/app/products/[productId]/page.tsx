"use client"

import { getProductById } from "@/api/products.api";
import { useQuery } from "@tanstack/react-query";
import ProductDetails from "./_components/ProductDetails";

export default function ProductDetailsPage({ params: { productId } }: { params: { productId: string } }) {
    const { data } = useQuery({
        queryKey: ["product"],
        queryFn: ()=>  getProductById(productId),
    });

    const product = data;

    return (
        product &&
        <ProductDetails product={product}/>
    );
}
