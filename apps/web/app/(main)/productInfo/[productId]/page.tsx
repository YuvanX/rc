import { DetailedProductPage } from "@/components/detailed-productpage"
import { prisma } from "@workspace/db/client"

export default async function ProductInfoPage({ params: { productId } }: { params: { productId: string } }) {
    const productDetails = await prisma.product.findUnique({ where: { id: productId } })
    
    if (!productDetails) {
        return <div className="flex justify-center items-center h-screen">
            Sorry Items not found
        </div>
    }

    return <div className="mt-20 mx-10 font-satoshi ">
       <DetailedProductPage productDetails={productDetails}/>
    </div>
}