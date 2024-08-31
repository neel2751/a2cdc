import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import Footer from "@/app/component/Footer/Footer";
import Contact from "./Contact";
export default function Home() {
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <Contact />
      <Footer />
    </>
  );
}
