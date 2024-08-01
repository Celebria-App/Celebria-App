import React from "react";
import Image from "next/image";
import LoadingCircle from "../../../public/loading-circle.svg";

const Loader = () => {
  return (
    <div className="bg-white flex justify-center items-center h-full h-screen w-full">
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
