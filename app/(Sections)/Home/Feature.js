import Image from "next/image";
import Link from "next/link";
import { FEATURES } from "@/app/data/data";

const Features = () => {
  return (
    <>
      <section className="lg:p-8 bg-[#0f1014]">
        <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
          <div className="relative isolate lg:flex-col overflow-hidden bg-gradientdown ring-1 ring-white/10 rounded-3xl px-6 p-10 lg:flex lg:p-20">
            <div className="pb-12 border-b border-white/10">
              <span className="text-white uppercase">Why choose US</span>
              <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl bg-gradient-to-t from-[#bfdbfe] to-[#3b82f6] text-transparent bg-clip-text">
                Build with Confidence
                <span className="block text-zinc-400">Achieve Your Vision</span>
              </h2>
            </div>
            <dl className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 lg:space-y-0 lg:gap-24">
              {FEATURES.map((item) => (
                <div key={item.id}>
                  <dt className="inline-flex items-center gap-3">
                    <div className="flex items-center text-white">
                      <Image
                        className="w-6 h-6 text-white"
                        src={item.icon}
                        alt="new icon"
                        height={20}
                        width={20}
                      />
                    </div>
                    <p className="text-base font-medium leading-6 text-white">
                      {item.title}
                    </p>
                  </dt>
                  <dd className="mt-4 text-sm text-[#eff6ff]">
                    {item.description}
                  </dd>
                  {/* button for contact us or learn more */}
                  {item.button && (
                    <div className="mt-4">
                      <Link
                        href={item.link}
                        className="inline-flex whitespace-nowrap overflow-hidden w-min text-center items-center justify-center rounded-md border border-transparent bg-[#0f1014] px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                      >
                        <span className="text-white text-sm font-medium">
                          Contact Us Today
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
