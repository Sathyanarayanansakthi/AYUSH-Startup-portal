import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      
      {/* Left Section */}
      <div className="hidden md:flex flex-col p-7 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4 z-10 relative">
          <h3 className="font-bold text-2xl text-white">Auto Assist Hub</h3>
          <Link href="/">
            <Button variant="ghost" className="bg-black text-white px-7">
              ← Back To Home
            </Button>
          </Link>
        </div>

        {/* Full-Height Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/car_login.jpg"
            alt="Scenic"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Right Section (Form or other content) */}
      <div className="flex items-center justify-center p-10 bg-white">
        <div className="max-w-md w-full">
          <h3 className="text-3xl font-semibold text-center mb-6">Create an Account</h3>

          <div className="mb-3"> 
            <form>
              <Input placeholder="Email" type="email" className="mb-3" />
              <Input placeholder="Password" type="password" className="mb-3" />
              <Input placeholder="Confirm Password" type="password" className="mb-3" />
              <Link href={"/dashboard"}>
              <Button type="submit" variant="ghost" className="text-white bg-black p-2 w-full" >Sign Up</Button>
              </Link>
            </form>

            <p className="mt-5">Dont Have an Account <Link href="/signin" className="text-blue-700">Sign In</Link></p>
            <p className="mt-5 text-center">or Continue with</p>
            <Button variant="outline" className="p-2 mt-3 bg-red-700 text-white w-1/2">Sign In with Google</Button>
            <Button variant="outline" className="p-2 mt-3 bg-black text-white w-1/2 gap-8 mb-5">Sign In with Apple</Button>
          </div>
        </div>
      </div>

    </div>
  )
}
