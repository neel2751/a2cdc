"use client";
import { Login, Register } from "@/actions/auth";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const sigup = async (e) => {
    e.preventDefault();
    // if email and password is empty set the error
    if (data.email === "" || data.password === "") {
      toast.error("please Enter Valid Email and password");
      return;
    }
    // if email and password is not empty then send the data to server
    try {
      const response = await Login(data.email, data.password);
      console.log(response);
      if (response.error) {
        toast.error(response.error);
        return;
      }
      toast.success("User Created Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error Occured");
    }
  };
  return (
    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm max-w-sm mx-auto">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-base font-semibold text-neutral-800 ">
            Creative Design & Construction
          </h1>
        </div>
        <div className="mt-10">
          <form onSubmit={sigup}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    placeholder="jondoe@mail.com"
                    name="email"
                    className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    // required
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    placeholder="Enter Password"
                    className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    // required
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default page;
