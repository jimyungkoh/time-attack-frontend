"use client"

import LogInModal from "@/app/_common/Header/_components/LogInModal";
import { useAppDispatch } from "@/app/_providers/Providers";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/reducers/utils.slice";
import { Product } from "@/types/product.type";
import convertToKRW from "@/utils/moneyFormatter";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({ product }: { product: Product }) {
 const dispatch = useAppDispatch();
  const { signedIn } = useAuth();
  
  const addToCart = () => {
    if (!signedIn) {
      const action = setModal(<LogInModal />);
      dispatch(action);
    }
  }

  return (
    <article className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <div className="relative aspect-[3/4]">
          <Image
            src={product.imgSrc}
            alt={`${product.id}`}
            priority
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 20vw"
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="py-8 flex flex-col">
          <Link
            className="text-[15px] border-b pb-2.5 mb-2.5 font-bold"
            href={`/brands/${product?.brandId}`}
          >
            <h2>
              {product.brand.nameKr} / {product.brand.nameEn}
            </h2>
          </Link>
          <h1 className="text-lg">{product.name}</h1>
          <div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
            <div className="text-slate-900 font-bold">정가</div>
            <div className="col-span-4 line-through text-red-500">
              {convertToKRW(product.originalPrice)}
            </div>
            <div className="text-slate-900 font-bold">판매가</div>
            <div className="col-span-4 font-semibold">
              {convertToKRW(product.price)}
            </div>
            <div className="text-slate-900 font-bold">배송</div>
            <div className="col-span-4">{product.deliveryType}</div>
            <div className="text-slate-900 font-bold">잔여 재고</div>
            <div className="col-span-4">{product.onlineStock}</div>
          </div>
          <button
            onClick={addToCart}
            className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-black text-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white">
            장바구니에 담기
          </button>
        </div>
      </section>
    </article>
  );
}

