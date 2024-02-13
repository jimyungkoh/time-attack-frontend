import { getProducts } from "@/api/products.api";
import ResponsiveGridProductsViewItem from "./ResponsiveGridProductsViewItem";

export default async function ResponsiveGridProductsView({brandId = null}:{brandId: string |null}) {
    const products = await fetchProducts({brandId});

    return (
        products && <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
            {products.map(product => (
                <ResponsiveGridProductsViewItem key={product.id} product={product} />
            ))}
        </ul>
    );
}

async function fetchProducts({brandId = null}:{brandId: string |null}) {
    return await getProducts(brandId);
}