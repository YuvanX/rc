import { AppBar } from "@/components/appbar";
import { ProductGrid } from "@/components/product-grid";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";


export default async function HomePage() {
    const session = await getServerSession(authOptions);
   
    if(!session) redirect('/')
    
    return <div>
      <ProductGrid />
    </div>
}