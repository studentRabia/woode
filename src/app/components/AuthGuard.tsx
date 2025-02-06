// "use client"
// import { useUser } from "@clerk/nextjs"
// import { useRouter } from "next/router"
// import { useEffect, useState } from "react"

// const AuthGuard= ({children} : {children:React.ReactNode})=>{
//     const [isloading, setIsLoading] = useState(true)
//     const {isSignedIn} = useUser()
//     const router = useRouter()
//     useEffect(()=>{
//         if(isSignedIn === false){
//             router.replace("login")

//         }else{
//             setIsLoading(false)
//         }
//     },[isSignedIn,router])

// if(isloading)
// return<p>Loading ...</p>
// return<>{children}</>

// }
// export default AuthGuard










"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token"); // Example authentication check
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
