"use client";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";

export const SignUpForm = () => {
  return <div>
    <div className="grid grid-cols-12 gap-5 my-10 mx-20 rounded-xl border">
        <div className="col-span-8 border">
            <img src="/images/f1.jpeg" className="object-cover w-full rounded-l-xl"/>
        </div>
        <div className="col-span-4">
            <Card className="flex flex-col py-5">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Exclusive RC Toys</CardTitle>
                    <CardDescription className="text-muted-foreground">Signup now to get exclusive access to handcrafted rc toys</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="my-4">
                        <Label className="my-1">Email</Label>
                        <Input placeholder="y@example.com" type="text" />
                    </div>

                    <div className="my-4">
                        <Label className="my-1">Password</Label>
                        <Input type="password" />
                    </div>

                    <div>
                        <Label className="my-1">Username</Label>
                        <Input placeholder="yuvan" type="text"/>
                    </div>

                    <Button className="w-full mt-4">Create an account</Button>
                </CardContent>
            </Card>
        </div>
    </div>
  </div>
};
