"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/signup");
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-medium">Redirecting...</p>
    </div>
  );
};

export default Home;
