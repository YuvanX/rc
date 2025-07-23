import { SignIn } from "@/components/signin";
import { SignUp } from "@/components/signup";

export default function SignUpPage() {
    return <div className="grid grid-cols-12 h-screen">
        <div className="col-span-6 flex justify-center items-center"> <SignUp /></div>
        <div></div>
    </div>
}