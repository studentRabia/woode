// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     if (email && password) {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       router.push("/dashboard");
//     } else {
//       setError("Please enter both email and password");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
//           Sign in to your account
//         </h2>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <input
//               id="email"
//               type="email"
//               autoComplete="email"
//               required
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className=" block text-sm font-medium text-gray-700 ">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-primary bg-gray-950 text-white font-semibold rounded-lg shadow-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-blue-800"
//           >
//             Sign in
//           </button>
//         </form>

//         <div className="mt-4 text-center">
//           <a href="#" className=" text-sm text-primary text-blue-800 hover:underline ">
//             Forgot your password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (email && password) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } else {
      setError("Please enter both email and password");
    }
  };

  return (
    <ClerkProvider>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
          <SignedIn>
            <div className="text-center">
              <UserButton />

              <h2 className="text-2xl font-bold">Welcome</h2>
              <p className="text-sm text-gray-600 mt-2">
                Use coupon{" "}
                <span className="text-red-500 font-semibold">DISCOUNT111</span>{" "}
                to get a $50 discount on your next order!
              </p>
            </div>
          </SignedIn>

          <SignedOut>
            <h3 className="text-lg font-semibold mt-4">Login</h3>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  Remember Me
                </label>
                <Link
                  href="#"
                  className="text-primary hover:underline text-blue-700"
                >
                  Forgot Password?
                </Link>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="w-full py-2 bg-gray-950 text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-red-400 hover:bg-blue-800">
                <SignInButton mode="modal" />
              </div>
            </form>

            <p className="mt-4 text-sm">
              New here?{" "}
              <Link
                href="#"
                className="text-primary text-blue-700 font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </SignedOut>
        </div>
      </div>
    </ClerkProvider>
  );
}
