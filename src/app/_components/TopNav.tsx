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
        <nav className="flex justify-between items-center p-4 border-b border-black text-xl font-semibold">
            <div className="p-1 rounded-md cursor-default border-opacity-45 border-[#543A14] border-[4px]">
                <h1 className={`${lilita.className}`}>UploadThing</h1>
            </div>

            <div className="flex flex-row gap-4 items-center">
                <SignedOut>
                    <SignInButton>
                        <button className="bg-[#F0BB78] p-1 rounded-md hover:shadow-2xl cursor-pointer duration-300 border-[#543A14] border-[4px]">
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
                                userButtonBox: "hover:bg-[#F0BB78] duration-300 rounded-full p-1",
                                userButtonTrigger: "focus:outline-none focus:ring-2 focus:ring-[#F7D9C8]",
                            },
                        }}
                    />
                </SignedIn>
            </div>
        </nav>
    );
}
