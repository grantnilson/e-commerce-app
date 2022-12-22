import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <header className="w-full h-32 my-4 mx-auto flex items-center bg-gray-200 justify-end space-x-4">
        <h1 className="mx-auto text-2xl font-light">
          E-Commerce Web Application
        </h1>
        <div className="">
          <button className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded">
            Sign Up
          </button>
        </div>
        <div className="">
          <button className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded">
            Log In
          </button>
        </div>
        <div className="">
          <button
            className="px-4 py-2 text-lg bg-black text-white hover:text-black hover:bg-white border-black rounded"
            onClick={() => router.push("/admin")}
          >
            Admin
          </button>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
