import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex justify-between items-center p-4 border-b text-xl font-semibold">
      <div>galllery</div>

      <div>Sign in</div>
    </nav>
    );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
      <body> 
        <TopNav />
        {children}
        
        </body>
    </html>
  );
}
