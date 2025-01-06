
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { Lilita_One } from 'next/font/google'
import { Home, User, Settings, UserRoundPlus, ArrowRight, Share2, FolderHeart, Upload, UserPlus, Shield } from "lucide-react";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import { HeroSection } from "./_components/heroSection";
import { FeaturesSection } from "./_components/featuresSection";
import { StatsSection } from "./_components/statsSection";
import { HowItWorks } from "./_components/howItWorksSection";
import { CtaSection } from "./_components/ctaSection";
import { FooterSection } from "./_components/footerSection";



const lilita = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Updated Images component
export async function Images() {
  const images = await getMyImages();

  return (
    <div className="bg-[#1d0938] h-screen ">
    <div className="grid grid-cols-2 sm:grid-cols-2   mt-16 md:grid-cols-3  lg:grid-cols-5 gap-8  p-8">
  {images.map((image) => (
    <div 
      key={image.id} 
      className="group w-full bg-white/5  backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10"
    >
{/* 
<div className=" grid lg:grid-cols-5 bg-[#1d0938]   justify-center ">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="w-48 p-3 flex flex-col bg-white   hover:shadow-lg transition-shadow duration-300"
        > */}
      <div className="relative  aspect-square">
        <Link href={`/img/${image.id}`}>
        <Image
          src={image.url} 
          alt={image.name ?? ""} 
          width={190}
          height={190}
          style={{objectFit: "contain"}}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        </Link>
      </div>
      <div className="p-3 border-t border-[#AF47D2]/10">
        <div className="text-sm font-medium text-white/90 truncate">
          {image.name}
        </div>
      </div>
    </div>
  ))}
</div>
</div>


  );
}

export default async function HomePage() {
  return (

    <main className="relative bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 min-h-screen">
      {/* Animated background gradient */}
    
      
      <SignedOut>
        {/* Hero Section */}
       <HeroSection/>

        {/* Features Section */}
        <FeaturesSection/>

        {/* Stats Section */}
       <StatsSection/>

        {/* How It Works Section */}
       <HowItWorks/>

        {/* CTA Section */}
      <CtaSection/>
        {/* Footer */}
        <FooterSection/>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>

//     <main className="bg-[#1d0938] min-h-screen">
//   <SignedOut>
//     {/* Hero Section */}
//     <div className="h-screen flex flex-col items-center justify-center px-4">
//       <h1 className={`${lilita.className} lg:text-6xl text-4xl text-center text-white`}>
//         Welcome to uploadThing! ❤️🔼 
//       </h1>
//       <p className="text-2xl mt-6 text-center text-white/80">Your Story, Your Gallery</p>
//       <p className="text-xl mt-2 text-center text-white/60">Store, Share, and Showcase Your Memories</p>
//       <SignInButton>
//         <button className="mt-8 flex items-center bg-[#AF47D2] hover:bg-[#AF47D2]/90 text-white rounded-lg px-8 py-3 transition-all">
//           Get Started <UserRoundPlus className="ml-2" size={20} />
//         </button>
//       </SignInButton>
//     </div>

//     {/* Features Section */}
//     <div className="py-20 px-4">
//       <h2 className="text-3xl text-center text-white font-semibold mb-12">Why Choose uploadThing?</h2>
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//         <div className="bg-white/5 p-6 rounded-lg">
//           <Upload className="w-12 h-12 text-[#AF47D2] mb-4" />
//           <h3 className="text-xl text-white font-medium mb-2">Easy Uploads</h3>
//           <p className="text-white/70">Drag and drop your files with our intuitive interface. Support for all major file types.</p>
//         </div>
//         <div className="bg-white/5 p-6 rounded-lg">
//           <Shield className="w-12 h-12 text-[#AF47D2] mb-4" />
//           <h3 className="text-xl text-white font-medium mb-2">Secure Storage</h3>
//           <p className="text-white/70">Your files are encrypted and stored safely with enterprise-grade security.</p>
//         </div>
//         <div className="bg-white/5 p-6 rounded-lg">
//           <Share2 className="w-12 h-12 text-[#AF47D2] mb-4" />
//           <h3 className="text-xl text-white font-medium mb-2">Easy Sharing</h3>
//           <p className="text-white/70">Share your uploads instantly with customizable privacy settings.</p>
//         </div>
//       </div>
//     </div>

//     {/* Stats Section */}
//     <div className="py-20 bg-black/20">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="grid md:grid-cols-3 gap-8 text-center">
//           <div>
//             <h3 className="text-4xl font-bold text-[#AF47D2]">1M+</h3>
//             <p className="mt-2 text-white/70">Happy Users</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold text-[#AF47D2]">50M+</h3>
//             <p className="mt-2 text-white/70">Files Uploaded</p>
//           </div>
//           <div>
//             <h3 className="text-4xl font-bold text-[#AF47D2]">99.9%</h3>
//             <p className="mt-2 text-white/70">Uptime</p>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* How It Works Section */}
//     <div className="py-20 px-4">
//       <h2 className="text-3xl text-center text-white font-semibold mb-12">How It Works</h2>
//       <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
//         <div className="text-center">
//           <div className="w-12 h-12 bg-[#AF47D2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//             <UserPlus className="w-6 h-6 text-[#AF47D2]" />
//           </div>
//           <h3 className="text-white font-medium mb-2">1. Sign Up</h3>
//           <p className="text-sm text-white/70">Create your free account</p>
//         </div>
//         <div className="text-center">
//           <div className="w-12 h-12 bg-[#AF47D2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Upload className="w-6 h-6 text-[#AF47D2]" />
//           </div>
//           <h3 className="text-white font-medium mb-2">2. Upload</h3>
//           <p className="text-sm text-white/70">Add your files</p>
//         </div>
//         <div className="text-center">
//           <div className="w-12 h-12 bg-[#AF47D2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//             <FolderHeart className="w-6 h-6 text-[#AF47D2]" />
//           </div>
//           <h3 className="text-white font-medium mb-2">3. Organize</h3>
//           <p className="text-sm text-white/70">Create albums & collections</p>
//         </div>
//         <div className="text-center">
//           <div className="w-12 h-12 bg-[#AF47D2]/20 rounded-full flex items-center justify-center mx-auto mb-4">
//             <Share2 className="w-6 h-6 text-[#AF47D2]" />
//           </div>
//           <h3 className="text-white font-medium mb-2">4. Share</h3>
//           <p className="text-sm text-white/70">Share with anyone</p>
//         </div>
//       </div>
//     </div>

//     {/* CTA Section */}
//     <div className="py-20 bg-[#AF47D2]/10">
//       <div className="max-w-3xl mx-auto text-center px-4">
//         <h2 className="text-3xl text-white font-semibold mb-4">Ready to Start?</h2>
//         <p className="text-xl text-white/70 mb-8">Join thousands of users who trust uploadThing for their file sharing needs.</p>
//         <SignInButton>
//           <button className="bg-[#AF47D2] hover:bg-[#AF47D2]/90 text-white rounded-lg px-8 py-3 transition-all inline-flex items-center">
//             Create Free Account <ArrowRight className="ml-2" size={20} />
//           </button>
//         </SignInButton>
//       </div>
//     </div>

//     {/* Footer */}
//     <footer className="py-8 bg-black/20">
//       <div className="max-w-6xl mx-auto px-4 text-center text-white/50 text-sm">
//         <p>© 2024 uploadThing. All rights reserved.</p>
//         <div className="mt-4 space-x-4">
//           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//           <a href="#" className="hover:text-white transition-colors">Contact</a>
//         </div>
//       </div>
//     </footer>
//   </SignedOut>

//   <SignedIn>
//     <Images />
//   </SignedIn>
// </main>
    // <main className="  bg-[#1d0938]">
    //   <SignedOut>
    //     <div className="h-full w-full text-2xl">
    //       <h1 className={`${lilita.className} lg:text-5xl text-4xl lg:mt-[12%] mt-[40%] text-center`}>
    //         Welcome to uploadThing! ❤️🔼 
    //       </h1>
    //       <p className="text-2xl mt-6 text-center">Your Story, Your Gallery</p>
    //       <p className="text-2xl mt-2 text-center">Please Sign in!</p>
    //       <SignInButton>
    //         <button className=" flex  ml-[39%] lg:ml-[46%] mt-4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg  dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    //           Sign In <UserRoundPlus className="ml-2" size={20} />
    //         </button>
    //       </SignInButton>
    //     </div>
    //   </SignedOut>
    //   <SignedIn>
    //     <Images />
    //   </SignedIn>
      
    // </main>
    
  );
}