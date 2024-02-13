import { Brand } from "@/types/brand.type";
import Link from "next/link";

export default function ResponsiveGridBrandsViewItem({ brand }: {brand:Brand}) {
    return (
        <li>
            <Link className="brand-link" href={`/brands/${brand.id}`}>
                {brand.nameKr}
            </Link>
        </li>
    );
}
