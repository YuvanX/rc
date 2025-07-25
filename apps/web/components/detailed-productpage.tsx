import { Product } from "@workspace/db/index"
import Image from "next/image"
import { BackButton } from "./back-button"

export const DetailedProductPage = ({ productDetails }: { productDetails: Product }) => {
    return <>
    <BackButton />
    <div className="flex">
        <div className="w-[500px] h-[500px] relative">
            <Image src={productDetails.thumbImage} fill alt={productDetails.name}/>
        </div> 
    </div>
    </>
}