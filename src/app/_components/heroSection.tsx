import { SignInButton } from "@clerk/nextjs";
import { UserRoundPlus } from "lucide-react";

export const HeroSection = () => {
    return (
        <div className="relative h-screen flex flex-col items-center justify-center px-4">
            <div className="relative z-10 text-center">
                <div className="inline-block mb-6 transform hover:scale-110 transition-transform">
                    <span className="text-4xl animate-pulse">❤️</span>
                    <span className="text-4xl animate-bounce ml-2">🔼</span>
                </div>
                <h1 className="text-5xl lg:text-7xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 leading-tight mb-6">
                    Welcome to UploadThing
                </h1>
                <p className="text-3xl bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mt-4">
                    Your Story, Your Gallery
                </p>
                <p className="text-xl text-purple-200/90 mt-2">
                    Store, Share, and Showcase Your Memories
                </p>
                <div className="flex justify-center">
                    <SignInButton>
                        <button className="mt-8 group flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl px-8 py-4 font-medium transition-all transform hover:scale-105 hover:shadow-xl shadow-purple-500/25">
                            Get Started 
                            <UserRoundPlus className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                    </SignInButton>
                </div>
            </div>
        </div>
    );
}