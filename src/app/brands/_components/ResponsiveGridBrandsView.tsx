"use client"

import { getBrands } from "@/api/brands.api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ResponsiveGridBrandsViewItem from "./ResponsiveGridBrandsViewItem";

export default function ResponsiveGridBrandsView({activeBrandId}: {activeBrandId: number | null}) {
    const { data } = useQuery({
        queryKey: ["brands"],
        queryFn: getBrands,
    });

    const brands = data;

    return (
        brands && <nav className="mx-auto max-w-screen-md mb-16">
            <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
                <li className="col-span-3 sm:col-span-4 md:col-span-6 mb-4">
                    <Link href="/brands" className={`brand-link ${activeBrandId ? "font-normal" : "font-bold"}`}>ALL</Link>
                </li>
                {brands.map((brand) => (
                    <ResponsiveGridBrandsViewItem key={brand.id} brand={brand} active={ activeBrandId === brand.id} />
                ))}
            </ul>
        </nav>
    );
}
