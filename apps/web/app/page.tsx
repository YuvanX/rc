import { HeroSection } from "@/components/hero-section";
import { TopBar } from "@/components/topbar";
import Aurora from "@/y/Aurora/Aurora";

export default function Page() {
  return (
    <div className="min-w-full relative">
      <Aurora />
      <TopBar />
      <HeroSection />
    </div>
  )
}
