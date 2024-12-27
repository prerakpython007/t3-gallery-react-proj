export const StatsSection = () => {
    return (
        <div className="relative py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { value: "1M+", label: "Happy Users" },
              { value: "50M+", label: "Files Uploaded" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.value}
                </h3>
                <p className="mt-2 text-lg text-purple-200/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}