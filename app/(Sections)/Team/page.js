import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
// import Team from "./Team";
import Footer from "@/app/component/Footer/Footer";
import TeamHero from "./TeamHero";
import TeamFilter from "./TeamFilter";
export default function Home() {
  return (
    <>
      {/* <Suspense fallback={null}> */}
      {/* <NavigationEvents> */}
      <SubMenu>
        <Navbar />
      </SubMenu>
      <TeamHero />
      <TeamFilter />
      <Footer />
      {/* </NavigationEvents> */}
      {/* </Suspense> */}
    </>
  );
}
