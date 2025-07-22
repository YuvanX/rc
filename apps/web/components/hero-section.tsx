import Aurora from "@/y/Aurora/Aurora";
import { Button } from "@workspace/ui/components/button";
import { ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center  py-20 space-y-5 font-satoshi">
      <div className="text-8xl font-bold">Experience the <span className="text-[#BAFD50]">Speed</span></div>
      <div className="text-3xl max-w-4xl text-center text-muted-foreground">
        Premium RC cars for enthusiasts. From drift cars to monster trucks, find your perfect remote-controlled racing machine.
      </div>
      <div className="flex items-center gap-3">
        <Button className="bg-[#BAFD50] text-black">Shop Now <ArrowUpRight /></Button>
        <Button className="bg-white text-black">View Collection</Button>
      </div>
    </div>
  );
};
