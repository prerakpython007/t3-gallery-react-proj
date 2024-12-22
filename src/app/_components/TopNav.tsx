import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { Lilita_One } from 'next/font/google'

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export function TopNav() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-black text-xl font-semibold">
      <div className=" p-1 rounded-md  cursor-default border-opacity-45 border-[#543A14] border-[4px]">
        <h1 className={`${lilita.className}`}>UploadThing</h1>
      </div>

      <div>
        <SignedOut>
          <SignInButton>
            <button className="bg-[#F0BB78] p-1 rounded-md hover:shadow-2xl cursor-pointer duration-300 border-[#543A14] border-[4px]">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
        <UserButton
  appearance={{
    elements: {
      avatarBox: "w-10 h-10",  // Controls avatar size
      userButtonBox: "hover:bg-[#F0BB78] duration-300 rounded-full p-1", // Controls button container
      userButtonTrigger: "focus:outline-none focus:ring-2 focus:ring-[#F7D9C8]", // Button focus states
    },
  }}
/>
        </SignedIn>
      </div>
    </nav>
  );
}