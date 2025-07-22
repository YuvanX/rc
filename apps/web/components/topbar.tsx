import { Button } from "@workspace/ui/components/button";
import { ArrowUpRight } from "lucide-react";

export const TopBar = () => {
  return <div className="fixed w-full top-5 px-40">
    <div className="flex justify-between items-center font-satoshi py-3 rounded-full px-5 bg-white/10 border border/10 ">
      <div className="font-bold tracking-tighter text-[#BAFD50] text-2xl ">revcars</div>
      <div className="flex items-center gap-8">
        <div className="capitalize text-sm font-semibold">signup</div>
        <Button className="bg-[#BAFD50] rounded-full px-6 capitalize font-semibold text-black">signin
          <ArrowUpRight size={20} />
        </Button>
      </div>
    </div>
  </div>
};
