"use client"

import { getProductById } from "@/api/products.api";
import convertToKRW from "@/utils/moneyFormatter";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailsPage({ params: { productId } }: { params: { productId: string } }) {
    const { data } = useQuery({
        queryKey: ["product"],
        queryFn: ()=>  getProductById(productId),
    });

    const product = data;

    return (
        product &&
        <article className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <div className="relative aspect-[3/4]">
                    <Image src={product.imgSrc} alt={`${product.id}`} priority fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 20vw" quality={100} className="object-cover" />
                </div>
                <div className="py-8 flex flex-col">
                    <Link className="text-[15px] border-b pb-2.5 mb-2.5 font-bold" href={`/brands/${product?.brandId}`}>
                        <h2>{product.brand.nameKr} / {product.brand.nameEn}</h2>
                    </Link>
                    <h1 className="text-lg">{product.name}</h1>
                    <div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
                        <div className="text-slate-900 font-bold">정가</div>
                        <div className="col-span-4 line-through text-red-500">{convertToKRW(product.originalPrice)}</div>
                        <div className="text-slate-900 font-bold">판매가</div>
                        <div className="col-span-4 font-semibold">{convertToKRW(product.price)}</div>
                        <div className="text-slate-900 font-bold">배송</div>
                        <div className="col-span-4">{product.deliveryType}</div>
                        <div className="text-slate-900 font-bold">잔여 재고</div>
                        <div className="col-span-4">{product.onlineStock}</div>
                    </div>
                    <button className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-black text-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white">
                        장바구니에 담기
                    </button>
                </div>
            </section>
        </article>
    );
}
