import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, HeaderMid, Navbar } from "./components/navbar";
import Footer from "./components/footer";

import { ClerkProvider,} from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furniture Webside",
  description: "Generated by Rabia Rehman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <HeaderMid/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>




  //   <ClerkProvider>
  //     <html lang="en">
  //       <body
  //         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  //       >
  //         <Navbar/>
  //        <HeaderMid/>
  //        <Header/>
  //         <SignedOut>
  //           <SignInButton />
  //         </SignedOut>
  //         <SignedIn>
  //           <UserButton />
  //         </SignedIn>
  //         {children}
  //         <Footer/>
  //       </body>
  //     </html>
  //   </ClerkProvider>
  

);
}
