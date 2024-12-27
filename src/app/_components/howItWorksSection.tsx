import { FolderHeart, Share2, Upload, UserPlus } from "lucide-react"

export const HowItWorks = () => {
    return (
        <div className="relative py-20 px-4">
        <h2 className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-12">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { icon: <UserPlus />, title: "Sign Up", desc: "Create your free account" },
            { icon: <Upload />, title: "Upload", desc: "Add your files" },
            { icon: <FolderHeart />, title: "Organize", desc: "Create albums & collections" },
            { icon: <Share2 />, title: "Share", desc: "Share with anyone" }
          ].map((step, index) => (
            <div key={index} className="group text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-sm text-purple-200/90">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
}