import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { Lilita_One } from 'next/font/google'

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const dynamic = "force-dynamic";

// Separate async component for images
async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  // Create duplicated images array inside the component
  
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div key={image.id + "-" + index} className="w-48 p-3 flex flex-col">
          <img src={image.url} alt={image.name ?? ""} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

// Main page component
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full  w-full text-2xl ">
          <h1 className={`${lilita.className}  lg:text-5xl text-4xl lg:mt-[12%] mt-[40%] text-center `}>Welcome to uploadThing! ❤️🔼</h1>
          <p className="text-2xl mt-6 text-center">Your Story, Your Gallery</p>
          <p className="text-2xl mt-2 text-center">Please Sign in!</p>
          <SignInButton>
            <button className="bg-[#F0BB78] p-1 ml-[38%] lg:ml-[46.5%] mt-4 rounded-md hover:shadow-2xl cursor-pointer duration-300 border-[#543A14] border-[4px]">
              Sign In
            </button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        {/* Use proper JSX syntax for async components */}
        <Images />
      </SignedIn>
    </main>
  );
}