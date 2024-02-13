import { Brand } from "@/types/brand.type";
import Link from "next/link";

export default function ResponsiveGridBrandsViewItem({ brand, active }: {brand:Brand, active: boolean}) {
    return (
        <li>
            <Link className={`brand-link ${active? "font-bold" : "font-normal"}`} href={`/brands?brandId=${brand.id}`}>
                {brand.nameKr}
            </Link>
        </li>
    );
}
