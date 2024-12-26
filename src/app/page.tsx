
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
    <div className="flex bg-[#1d0938]  flex-wrap gap-4 justify-center p-4">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="w-48 p-3 flex flex-col bg-white   hover:shadow-lg transition-shadow duration-300"
        >
          <Image
            src={image.url} 
            alt={image.name ?? ""} 
            style={{objectFit: 'contain'}}
            width={190}
            height={190}
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="mt-2 text-center break-words font-medium text-gray-700">
            {image.name}
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