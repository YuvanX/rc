import { Product } from "@/types/productType"
import Image from "next/image"
import Link from "next/link"

export const ProductCard = ({ product }: { product: Product }) => {
    return <Link href={product.id}>
    <div className="w-96 h-96 relative rounded-xl cursor-pointer">
            <Image src={product.thumbImage} fill alt={product.name} className="rounded-xl"/>
        </div>
    </Link>
    
}