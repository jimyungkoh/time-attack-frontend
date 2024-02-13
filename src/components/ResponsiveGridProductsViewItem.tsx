import { Product } from "@/types/product.type";
import convertToKRW from "@/utils/moneyFormatter";
import Image from "next/image";
import Link from "next/link";

export default function ResponsiveGridProductsViewItem({ product }: { product: Product }) {
    return (
        <Link href={`/products/{product.id}`} className="relative flex flex-col group">
            <div className="aspect-[3/4] relative mb-4">
                <Image src={product.imgSrc} alt={`${product.id}`} priority fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={80} className="object-cover hover:scale-[1.07] duration-500"/>
            </div>
            <div className="grid gap-y-2">
                <div className="text-sm font-bold">
                    {product.brand.nameEn}
                </div>
                <h6 className="text-[15px]">{product.name}</h6>
                <div className="text-sm flex flex-col sm:flex-row products-baseline gap-1.5">
                    <span className="text-red-500 line-through font-semibold">{convertToKRW(product.originalPrice)}</span>
                    <span className="font-bold">{convertToKRW(product.price)}</span>
                </div>
            </div>
        </Link>
    );
}