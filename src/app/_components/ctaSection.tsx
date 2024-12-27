import { SignInButton } from "@clerk/nextjs"
import { ArrowRight } from "lucide-react"

export const CtaSection = () => {
    return (
        <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl text-purple-200/90 mb-8">
            Join thousands of users who trust uploadThing for their file sharing needs.
          </p>
          <SignInButton>
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl px-8 py-4 font-medium transition-all transform hover:scale-105">
              Create Free Account 
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </SignInButton>
        </div>
      </div>

    )
}