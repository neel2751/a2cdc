import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <CDCLoading />;
}

// we make our cdc logo loading
function CDCLoading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/images/CDC_LOGO.svg"}
          alt="CDC Logo"
          className="w-24 h-24
                object-cover rounded-full"
        />
      </div>
    </div>
  );
}
