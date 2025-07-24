'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import Link from "next/link"
import { useState } from "react"

export const SignIn = () => {
    const [userEmail, setUserEmail] = useState<string>();
    const [userPassword, setUserPassword] = useState<string>();

    return <Card className="min-w-lg font-satoshi bg-transparent border-none">
        <CardHeader className="text-center">
            <div className="text-5xl mb-5 font-striper text-[#BAFD50]">rev100x</div>
            <CardTitle className="text-3xl font-bold">Log in to your account</CardTitle>
            <CardDescription className="text-lg">Welcome back! Please enter your details</CardDescription>
        </CardHeader>
        <CardContent>
            <form className="space-y-4">
                <div className="space-y-3">
                    <Label className="font-bold text-lg">Email</Label>
                    <Input onChange={(e) => setUserEmail(e.target.value)} className="border-none py-7 !bg-[#1F1F22]"/>
                </div>
                <div className="space-y-3">
                    <Label className="font-bold text-lg">Password</Label>
                    <Input onChange={(e) => setUserPassword(e.target.value)} className="border-none py-7 !bg-[#1F1F22]"/>
                </div>
                
                <div className="text-center mt-3 text-lg">Don't have an account? <Link href={'/signup'} className="text-[#BAFD50]">Sign up</Link></div>
            </form>
        </CardContent>
    </Card>
}