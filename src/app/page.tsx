
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { Lilita_One } from 'next/font/google'
import { Home, User, Settings, UserRoundPlus } from "lucide-react";
import { getMyImages } from "~/server/queries";
import Image from "next/image";



const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Updated Images component
async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 bg-[#1d0938] p-8">
  {images.map((image) => (
    <div 
      key={image.id} 
      className="group w-full bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10"
    >
      <div className="relative aspect-square">
        <Image
          src={image.url} 
          alt={image.name ?? ""} 
          width={190}
          height={190}
          style={{objectFit: "contain"}}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-3 border-t border-[#AF47D2]/10">
        <div className="text-sm font-medium text-white/90 truncate">
          {image.name}
        </div>
      </div>
    </div>
  ))}
</div>
  );
}

export default async function HomePage() {
  return (
    <main className="  bg-[#1d0938]">
      <SignedOut>
        <div className="h-full w-full text-2xl">
          <h1 className={`${lilita.className} lg:text-5xl text-4xl lg:mt-[12%] mt-[40%] text-center`}>
            Welcome to uploadThing! ❤️🔼 
          </h1>
          <p className="text-2xl mt-6 text-center">Your Story, Your Gallery</p>
          <p className="text-2xl mt-2 text-center">Please Sign in!</p>
          <SignInButton>
            <button className=" flex  ml-[39%] lg:ml-[46%] mt-4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg  dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Sign In <UserRoundPlus className="ml-2" size={20} />
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
      
    </main>
    
  );
}