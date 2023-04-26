import React from "react";
import Heading from "./Heading";

const Work = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="Creative Work" />

      <div className="grid grid-cols-3 gap-4">
        <div className="row-span-2 relative group object-fill">
          <img src="/work2.jpg" alt="" className="w-[100%] h-[100%]" />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white ">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <img src="/work1.jpg" alt="" className="w-[100%] h-[100%]" />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white ">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <img src="/work4.jpg" alt="" className="w-[100%] h-[100%]" />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white ">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <img src="/work5.jpg" alt="" className="w-[100%] h-[100%]" />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white ">
            Project Title
          </div>
        </div>

        <div className="relative group">
          <img src="/work2.jpg" alt="" className="w-[100%] h-[100%]" />
          <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white ">
            Project Title
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
