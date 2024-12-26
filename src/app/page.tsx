import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { Lilita_One } from 'next/font/google'

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Updated Images component
async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.createdAt)],
  });

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="w-48 p-3 flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img 
            src={image.url} 
            alt={image.name ?? ""} 
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="mt-2 text-center font-medium text-gray-700">
            {image.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SignedOut>
        <div className="h-full w-full text-2xl">
          <h1 className={`${lilita.className} lg:text-5xl text-4xl lg:mt-[12%] mt-[40%] text-center`}>
            Welcome to uploadThing! ❤️🔼
          </h1>
          <p className="text-2xl mt-6 text-center">Your Story, Your Gallery</p>
          <p className="text-2xl mt-2 text-center">Please Sign in!</p>
          <SignInButton>
            <button className="bg-[#F0BB78] p-1 ml-[38%] lg:ml-[46.5%] mt-4 rounded-md hover:shadow-2xl cursor-pointer duration-300 border-[#543A14] border-4">
              Sign In
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