import Image from "next/image";
import CTAImage from "@/public/images/CTA.svg";
import Link from "next/link";

const CTA = ({ title, subTitle, imgSrc, btnName, btnLink }) => {
  return (
    <>
      <section className=" xl:lg:md:px-16 pb-20 ">
        <div className="max-w-full mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-md bg-gradient-to-tr from-gray-100 to-gray-200">
            <div className="absolute right-0 top-0 h-full w-full flex justify-end ">
              <Image
                className="h-full w-full object-cover rounded-md"
                // priority
                loading="lazy"
                src={CTAImage}
                alt="Call To Action Background Image"
                height={500}
                width={500}
              />
            </div>
            <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
              <h6 className="text-3xl/tight sm:text-4xl/tight md:text-[32px]/tight font-bold text-white">
                Transform your vision into reality with our help.
              </h6>
              <p className="font-medium text-gray-300">
                Ready to turn your vision into solid ground? We&apos;re more
                than builders, we&apos;re partners. Let&apos;s collaborate,
                innovate, and craft a space that exceeds your wildest dreams.
                Contact us today and build together.
              </p>
              <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
                <Link
                  href="/ContactUs"
                  className="outline-none h-12 px-5 rounded-xl hover:bg-blue-900 transition-all ease-in-out bg-blue-600 text-white flex items-center"
                >
                  Get a free quote
                  {/* Implement this new features for better user experiences.. */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
