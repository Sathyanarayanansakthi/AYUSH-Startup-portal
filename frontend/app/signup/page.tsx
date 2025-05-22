import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Section */}
      <div className="hidden md:flex flex-col p-7 relative">
        <div className="flex items-center justify-between mb-4 z-10 relative">
          <h3 className="font-bold text-2xl text-green-700"></h3>
          <Link href="/">
            <Button variant="outline" className="bg-green-500 text-white px-7">
              ← Back To Home
            </Button>
          </Link>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image src="/signup.jpg" alt="Signup Image" layout="fill" objectFit="cover" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center p-10 bg-white">
        <div className="max-w-md w-full">
          <h3 className="text-3xl font-semibold text-center mb-6">Create an Account</h3>

          <form>
            <Input placeholder="Name" type="text" className="mb-3" />
            <Input placeholder="Email" type="email" className="mb-3" />
            <Input placeholder="Password" type="password" className="mb-3" />
            <Button type="submit" variant="ghost" className="text-white bg-green-500 p-2 w-full">
              Sign Up
            </Button>
          </form>

          <p className="mt-5 text-center">
            Already have an account? <Link href="/signin" className="text-blue-700">Sign In</Link>
          </p>

          <p className="mt-5 text-center">or continue with</p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" className="bg-red-700 text-white w-1/2 mt-3">Google</Button>
            <Button variant="outline" className="bg-black text-white w-1/2 mt-3">Apple</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
