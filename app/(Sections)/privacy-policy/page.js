import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import Footer from "@/app/component/Footer/Footer";
import Privacy from "./privacy";
export default function Home() {
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <div className="max-w-7xl mx-auto py-10 sm:px-5 px-10">
        <Privacy />
      </div>
      <Footer />
    </>
  );
}
