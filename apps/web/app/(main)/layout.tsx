import { AppBar } from "@/components/appbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return <div>
        <AppBar />
        {children}
    </div>
}