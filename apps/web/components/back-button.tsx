import { Button } from "@workspace/ui/components/button"
import { ArrowLeft } from "lucide-react"

export const BackButton = () => {
    return <Button className="bg-[#BAFD50] cursor-pointer my-2">
        <ArrowLeft />
    </Button>
}