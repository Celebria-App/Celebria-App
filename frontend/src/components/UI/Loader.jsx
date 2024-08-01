import React from "react";
import Image from "next/image";
import LoadingCircle from "../../../public/loader-circle.svg";

const Loader = () => {
  return (
    <div className="bg-white flex justify-center items-center h-full min-h-[600px] w-full">
      <Image
        src={LoadingCircle}
        alt="Loading"
        width={50}
        height={50}
        priority
      />
    </div>
  );
};

export default Loader;
