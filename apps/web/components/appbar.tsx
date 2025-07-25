import { Input } from "@workspace/ui/components/input"
import { SearchIcon, ShoppingCart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
export const AppBar = () => {
    return <div className="w-full fixed top-0  font-satoshi">
        <div className="flex items-center justify-between border-b border/10  py-2 px-5  bg-white/10 backdrop-blur-lg">
            <div className="font-bold text-[#BAFD50] text-2xl tracking-tighter">
                revcars
            </div>
             <div className="flex items-center rounded-full border w-sm bg-neutral-900">
                    <div className="px-3 py-2.5"><SearchIcon size={20} /></div>
                    <Input type='search' className="border-none rounded-r-full !bg-transparent w-full" />
                </div>
            <div className="flex items-center gap-8">
               <div>
                <ShoppingCart size={20}/>
               </div>
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    </div>
}