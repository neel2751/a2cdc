"use client";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
// import Team from "./Team";
import Footer from "@/app/component/Footer/Footer";
import TeamHero from "./TeamHero";
import TeamFilter from "./TeamFilter";
import { Provider } from "react-redux";
import store from "@/app/Store/store";
export default function Home() {
  return (
    <>
      {/* <Suspense fallback={null}> */}
      {/* <NavigationEvents> */}
      <SubMenu>
        <Navbar />
      </SubMenu>
      <TeamHero />
      <Provider store={store}>
        <TeamFilter />
      </Provider>
      <Footer />
      {/* </NavigationEvents> */}
      {/* </Suspense> */}
    </>
  );
}
