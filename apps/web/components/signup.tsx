'use client'
import { signup } from "@/types/signupType"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { AlertCircleIcon, Loader2 } from "lucide-react"
import { motion as m, AnimatePresence } from "motion/react"

export const SignUp = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    const router = useRouter();

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError(null)
            }, 5000)

            return () => clearTimeout(timeout)
        }

    }, [error])

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        try {
            setLoading(true)
            const isValidDetails = checkUserDetails(username, email, password);

            if (!isValidDetails) {
                setError("Enter Valid Details")
                setLoading(false)
                return
            }

            const response = await axios.post('/api/signup', {
                username,
                email,
                password,
                redirect: false
            })
            setLoading(false)

            if (response.data.success) router.push('/home')

        } catch (error) {
            setError("Something went wrong. Please try again after sometime")
        }
    }

    function checkUserDetails(username: string, userEmail: string, userPassword: string) {
        if (!username || !userEmail || !userPassword) return false;

        const { success } = signup.safeParse({ username, email, password })
        if (!success) return false;

        return true;
    }

    return <Card className="min-w-lg font-satoshi bg-transparent border-none">
            <CardHeader className="text-center">
                <div className="text-5xl mb-5 font-striper text-[#BAFD50]">rev100x</div>
                <CardTitle className="text-3xl font-bold">Create a new Account</CardTitle>
                <CardDescription className="text-lg">To use revcars, Please enter your details</CardDescription>
            </CardHeader>
            <CardContent>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-3">
                        <Label className="font-bold text-lg">Username</Label>
                        <Input onChange={(e) => setUsername(e.target.value)} className="border-none py-7 !bg-[#1F1F22]" />
                    </div>
                    <div className="space-y-3">
                        <Label className="font-bold text-lg">Email</Label>
                        <Input onChange={(e) => setEmail(e.target.value)} className="border-none py-7 !bg-[#1F1F22]" />
                    </div>
                    <div className="space-y-3">
                        <Label className="font-bold text-lg">Password</Label>
                        <Input onChange={(e) => setPassword(e.target.value)} className="border-none py-7 !bg-[#1F1F22]" />
                    </div>
                    <Button type="submit" className="bg-[#BAFD50] w-full mt-1 py-5 rounded-md font-bold cursor-pointer">{loading ? <Loader2 className="animate-spin" /> : "Sign Up"}</Button>

                    <div className="text-center mt-3 text-lg">Already have an account? <Link href={'/signin'} className="text-[#BAFD50]">Log in</Link></div>
                </form>

            </CardContent>
            <AnimatePresence>
                {error && <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="w-full absolute bottom-5 ">
                    <Alert variant='destructive' className="max-w-lg">
                        <AlertCircleIcon />
                        <AlertTitle>
                            Error
                        </AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert></m.div>}
            </AnimatePresence>
        </Card>
}