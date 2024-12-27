import { SignedOut, SignedIn } from "@clerk/nextjs"
import { Images } from "../page"

export const FooterSection = () => {
    return (
        <footer className="relative py-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-purple-200/70">© 2024 uploadThing. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              {["Privacy Policy", "Terms of Service", "Contact"].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-purple-200/70 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </footer>
    )
}