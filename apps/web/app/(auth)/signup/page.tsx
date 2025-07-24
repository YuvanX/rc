import { SignUp } from "@/components/signup";

export default function SignUpPage() {
    return <div className="grid grid-cols-12 h-screen">
        <div className="col-span-6 flex flex-col justify-center items-center relative"> <SignUp /></div>
        <div></div>
    </div>
}