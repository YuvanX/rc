'use client'
import { signin } from "@/types/signinType"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const SignIn = () => {
    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault()

        try {
            setLoading(true)
            const isValidLoginDetails = checkLoginDetails(userEmail, userPassword)
            if (!isValidLoginDetails) {
                setError("Please Enter Correct Login Credentails")
                setLoading(false)
                return
            }

            const response = await signIn('credentials', {
                email: userEmail,
                password: userPassword,
                redirect: false
            })
            setLoading(false)

            if (response?.error) {
                setError("Invalid User. Please create an account.")
                return
            }
            router.push('/home')
        } catch (error) {
            setError("Something went wrong. Please try again after sometime.")
        }
    }

    function checkLoginDetails(email: string, password: string): boolean {
        if (!email || !password) return false;
        const { success } = signin.safeParse({ email, password })
        if (!success) {
            setError("Please enter a valid email or password")
            return false;
        }

        return true;
    }

    return <Card className="min-w-lg font-satoshi bg-transparent border-none">
        <CardHeader className="text-center">
            <div className="text-5xl mb-5 font-striper text-[#BAFD50]">rev100x</div>
            <CardTitle className="text-3xl font-bold">Log in to your account</CardTitle>
            <CardDescription className="text-lg">Welcome back! Please enter your details</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-3">
                    <Label className="font-bold text-lg">Email</Label>
                    <Input onChange={(e) => setUserEmail(e.target.value)} className="border-none py-7 !bg-[#1F1F22]" />
                </div>
                <div className="space-y-3">
                    <Label className="font-bold text-lg">Password</Label>
                    <Input onChange={(e) => setUserPassword(e.target.value)} className="border-none py-7 !bg-[#1F1F22]" />
                </div>
                <Button type="submit" className="bg-[#BAFD50] w-full mt-2">{loading ? <Loader2 className="animate-spin" /> : "Log in"}</Button>
                <div className="text-center mt-3 text-lg">Don't have an account? <Link href={'/signup'} className="text-[#BAFD50]">Sign up</Link></div>

            </form>
        </CardContent>
    </Card>
}