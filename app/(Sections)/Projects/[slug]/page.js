import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import Footer from "@/app/component/Footer/Footer";
import { PROJECT } from "@/app/data/data";
import Test from "./test";
import NotFound from "@/app/not-found";

export default function Page({ params }) {
  const project = PROJECT.find((item) => item.name === params.slug);
  if (!project) return <NotFound />;
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <Test name={project.name} />
      {/* <ProjectDetail data={project} /> */}
      {/* {project ? <NotFound /> : <ProjectDetail data={project} />} */}
      <Footer />
    </>
  );
}
