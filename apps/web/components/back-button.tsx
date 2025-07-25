"use client";

import { Button } from "@workspace/ui/components/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation";

export const BackButton = () => {
    const router = useRouter()

    return <Button onClick={() => router.back()} className="bg-[#BAFD50] hover:bg-[#c8ee7b] cursor-pointer my-2">
        <ArrowLeft />
    </Button>
}