import { getProductById } from "@/api/products.api";
import ProductDetails from "./_components/ProductDetails";

export default async function ProductDetailsPage({ params: { productId } }: { params: { productId: string } }) {
    const product = await fetchProduct(productId);

    return (
        product &&
        <ProductDetails product={product}/>
    );
}


async function fetchProduct(productId:string) {
    return await getProductById(productId);
}