// TopNav.tsx
"use client"

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { Lilita_One } from 'next/font/google'
import { useRouter } from "next/navigation";

import { useState } from "react";
import { ImageUpload } from "./imageUpload";

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export function TopNav() {
    const router = useRouter();
    const [uploading, setUploading] = useState(false);

    return (
        <nav className="flex justify-between items-center p-4 border-b border-[#FF8F00] text-xl font-semibold">
            <div className="p-1 rounded-md cursor-default bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700  border-[#FF8F00] border-[2px]">
                <h1 className={`${lilita.className}`}>UploadThing</h1>
            </div>

            <div className="flex flex-row gap-4 items-center">
                <SignedOut>
                    <SignInButton>
                    <button className="  text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg  dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Sign In 
                    </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <ImageUpload  />
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: "w-10 h-10",
                                userButtonBox: "hover:bg-[#FF8F00] duration-300 rounded-full p-1",
                                userButtonTrigger: "focus:outline-none focus:ring-2 focus:ring-[#AF47D2]",
                            },
                        }}
                    />
                </SignedIn>
            </div>
        </nav>
    );
}
