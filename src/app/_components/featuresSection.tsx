import { Share2, Shield, Upload } from "lucide-react"

export const FeaturesSection = () => {
    return (
        <div className="relative py-20 px-4">
            <h2 className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 mb-12">
                Why Choose uploadThing?
            </h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Upload />,
                        title: "Easy Uploads",
                        description: "Drag and drop your files with our intuitive interface. Support for all major file types."
                    },
                    {
                        icon: <Shield />,
                        title: "Secure Storage",
                        description: "Your files are encrypted and stored safely with enterprise-grade security."
                    },
                    {
                        icon: <Share2 />,
                        title: "Easy Sharing",
                        description: "Share your uploads instantly with customizable privacy settings."
                    }
                ].map((feature, index) => (
                    <div key={index} className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl text-white font-semibold mb-3">{feature.title}</h3>
                            <p className="text-purple-200/90">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}