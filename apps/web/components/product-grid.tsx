import { prisma } from "@workspace/db/client"
import { ProductCard } from "./product-card"

export const ProductGrid = async () => {
    const products = await prisma.product.findMany()
    return <div className="grid gird-cols-5 mt-28 mx-10">
        {products.map((p, idx) => <ProductCard key={idx} product={p}/>)}
    </div>
}