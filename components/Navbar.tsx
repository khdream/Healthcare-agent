import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
const Navbar = async () => {
  return (
    <nav className='sticky top-0 z-[100] h-full w-full border-b border-gray-200 bg-gray-100 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between'>
          <Link href='/' className='flex z-40 font-semibold'>
          <h1 className=
          "text-2xl font-semibold text-black drop-shadow-md">
        Onco <span className="text-blue-600"> Sight</span>
        </h1>
          </Link>
          
      
          <div>
          <LoginButton  asChild>
            <Button variant="default" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar