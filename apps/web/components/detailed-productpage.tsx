'use client'
import { Product } from "@workspace/db/index"
import Image from "next/image"
import { BackButton } from "./back-button"
import { LogoOverlay } from "./logo-overlay"
import { Heart, Minus, Plus, ShoppingCart, Truck } from "lucide-react"
import { Card, CardContent } from "@workspace/ui/components/card"
import { useState } from "react"
import { Button } from "@workspace/ui/components/button"

export const DetailedProductPage = ({ productDetails }: { productDetails: Product }) => {
    const [quantity, setQuantity] = useState(1);
    return <>
        <BackButton />
        <div className="flex my-5 gap-10">
            <div className="w-[700px] h-[700px] relative rounded-xl">
                <Image src={productDetails.thumbImage} fill alt={productDetails.name} className="rounded-xl" />
                <LogoOverlay className="" />
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div className="text-7xl font-bold">{productDetails.name}</div>
                    <div className="bg-[#BAFD50] w-10 h-10 text-black rounded-full flex justify-center items-center"><Heart /></div>
                </div>
                <div className="max-w-4xl my-4 text-neutral-400">{productDetails.description}</div>

                <Card className="my-2 max-w-lg bg-card">
                    <CardContent>
                        <div className="text-4xl font-bold"> &#8377;{productDetails.price}</div>
                        <div className="flex items-center gap-x-4">
                            <div className="flex border  items-center rounded-lg my-2.5">
                                <div className="px-1"><Minus className="cursor-pointer" onClick={() => setQuantity(c => c - 1)} size={15} /></div>
                                <div className="px-8 py-1.5 bg-[#BAFD50] text-black">{quantity}</div>
                                <div className="px-1">
                                    <Plus className="cursor-pointer" onClick={() => setQuantity(c => c + 1)} size={15} />
                                </div>
                            </div>

                            <Button className="bg-[#BAFD50] flex-1 font-bold"><ShoppingCart size={20}/> Add to Cart</Button>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1.5">
                            <Truck size={15}/>
                            <div>Free shipping on orders over &#8377;1000</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </>
}