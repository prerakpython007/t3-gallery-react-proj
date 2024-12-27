"use client"

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { Lilita_One } from 'next/font/google'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ImageUpload } from "./imageUpload";
import { UserRoundPlus, Upload, Menu, X, Bell } from "lucide-react";

const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export function TopNav() {
    const router = useRouter();
    const [uploading, setUploading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const MobileMenu = () => {
        return (
            <div className="fixed inset-0  bg-black/90 z-[100] flex flex-col">
                <div className="flex justify-between items-center p-4">
                    <div 
                        onClick={() => {
                            router.push('/');
                            setIsMobileMenuOpen(false);
                        }}
                        className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                    >
                        <h1 className={`${lilita.className} relative text-2xl text-white`}>
                            UploadThing
                        </h1>
                    </div>
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white hover:bg-purple-800/30 p-2 rounded-lg transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex flex-col  items-center justify-center space-y-6 mt-10">
                    <button 
                        onClick={() => {
                            router.push('/');
                            setIsMobileMenuOpen(false);
                        }}
                        className="text-white text-2xl hover:text-purple-300 transition-colors"
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => {
                            router.push('/share');
                            setIsMobileMenuOpen(false);
                        }}
                        className="text-white text-2xl  hover:text-purple-300 transition-colors"
                    >
                        Share
                    </button>
                    <button 
                        onClick={() => {
                            router.push('/activity');
                            setIsMobileMenuOpen(false);
                        }}
                        className="text-white text-2xl hover:text-purple-300 transition-colors"
                    >
                        Activity
                    </button>
                </div>
            </div>
        );
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r bg-inherit border-b border-purple-800/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center px-4 h-16">
             
                    <div className="flex items-center">
                        <div 
                            onClick={() => router.push('/')}
                            className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
                        >
                           
                            <div className="relative px-4 py-2 rounded-xl ">
                                <h1 className={`${lilita.className} relative text-2xl text-white`}>
                                    {isMobile ? "UT" : "UploadThing"}
                                </h1>
                            </div>
                        </div>
                    </div>

                    
                    <SignedIn>
                        {!isMobile && (
                            <div className="flex justify-center">
                                <ul className="flex space-x-6 text-white">
                                    <li className="cursor-pointer hover:text-purple-300 transition-colors">Home</li>
                                    <li className="cursor-pointer hover:text-purple-300 transition-colors">Share</li>
                                    <li className="cursor-pointer hover:text-purple-300 transition-colors">Activity</li>
                                </ul>
                            </div>
                        )}
                    </SignedIn>

                    
                    <div className="flex items-center gap-4">
                        <SignedOut>
                            <SignInButton>
                                <button className="group relative px-4 py-2 rounded-xl overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
                                    <div className="relative flex items-center gap-2 text-white">
                                        {!isMobile && <span className="text-sm font-medium">Sign In</span>}
                                        <UserRoundPlus size={18} className="group-hover:rotate-12 transition-transform" />
                                    </div>
                                </button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <div className="flex items-center gap-4">
                              
                                <div>
                                    <Bell/>
                                </div>
                                <div className="relative">
                                    <ImageUpload />
                                </div>

                             
                                <UserButton
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-9 h-9",
                                            userButtonBox: "hover:ring-2 hover:ring-purple-500/50 duration-300 rounded-full",
                                            userButtonTrigger: "focus:outline-none focus:ring-2 focus:ring-purple-500/50",
                                        },
                                    }}
                                />
                            </div>
                        </SignedIn>

                  
                        <SignedIn>
                            <button 
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2 rounded-lg md:hidden text-white hover:bg-purple-800/30 transition-colors"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </SignedIn>
                    </div>
                </div>
            </div>

         
            {uploading && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-900/20">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-progress" />
                </div>
            )}

           
            {isMobile && isMobileMenuOpen && <MobileMenu />}
        </nav>
    );
}