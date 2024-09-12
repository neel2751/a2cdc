"use client";
import { Mulish, Sora } from "next/font/google";
import React from "react";
import { Provider } from "react-redux";
import Header from "./Header/Header";
import SideBar from "./Header/SideBar";
import store from "../Store/store";

const mulish = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const layout = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      <SideBar />
      <div className={`${mulish.className} w-full lg:ps-64`}>{children}</div>
    </Provider>
  );
};

export default layout;
