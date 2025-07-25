'use client'
import { Product } from "@/types/productType"
import { Button } from "@workspace/ui/components/button"
import { ArrowRight } from "lucide-react"
import { motion as m } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"


export const ProductCard = ({ product }: { product: Product }) => {
    const router = useRouter()

    return <m.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="w-96 h-96 relative rounded-xl cursor-pointer font-satoshi border border-[#BAFD50] shadow-xl">
            <Image src={product.thumbImage} fill alt={product.name} className="rounded-xl" />
            <Button onClick={() => router.push(`/${product.id}`)} className="absolute bottom-2 right-3 bg-white rounded-full hover:bg-[#BAFD50] cursor-pointer">View Product
                <ArrowRight/>
            </Button>
        </m.div>
}