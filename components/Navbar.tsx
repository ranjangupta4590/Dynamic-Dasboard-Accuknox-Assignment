"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BellRing, ChevronDown, ChevronRight } from "lucide-react";

const Navbar = () => {
  const { user } = useUser();
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex top-0 w-full p-3 justify-between">
      <div className="mt-1">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/dashboard"
                className="font-semibold text-black"
              >
                Dashboard V2
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div className="flex gap-6">
        <div>
          <form className="max-w-10xl mx-auto">
            <label
              typeof="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search anything..."
                required
              />
            </div>
          </form>
        </div>
        <div>
          <ChevronDown className="h-5 w-5 mt-1 text-zinc-400" />
        </div>
        <div>
          <BellRing size={18} className="mt-2 text-zinc-400" />
        </div>
        <div className="flex gap-3">
          <UserButton />
          <h1 className="mt-1">Welcome, {user.firstName || "User"}!</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
