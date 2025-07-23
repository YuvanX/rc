import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export const SignUp = () => {
    return <Card className="min-w-lg font-satoshi bg-transparent border-none">
        <CardHeader className="text-center">
            <div className="text-5xl mb-5 font-striper text-[#BAFD50]">Speed100x</div>
            <CardTitle className="text-3xl font-bold">Create a new Account</CardTitle>
            <CardDescription className="text-lg">To use revcars, Please enter your details</CardDescription>
        </CardHeader>
        <CardContent>
                
            <form className="space-y-4">
                <div className="space-y-3">
                    <Label className="font-bold text-lg">Username</Label>
                    <Input className="border-none py-7 !bg-[#1F1F22]"/>
                </div>
                <div className="space-y-3">
                    <Label className="font-bold text-lg">Email</Label>
                    <Input className="border-none py-7 !bg-[#1F1F22]"/>
                </div>
                <div className="space-y-3">
                    <Label className="font-bold text-lg">Password</Label>
                    <Input className="border-none py-7 !bg-[#1F1F22]"/>
                </div>
                <Button className="bg-[#BAFD50] w-full mt-1 py-5 rounded-md font-bold">Sign Up</Button>

                <div className="text-center mt-3 text-lg">Already have an account? <span className="text-[#BAFD50]">Log in</span></div>
            </form>
        </CardContent>
    </Card>
}