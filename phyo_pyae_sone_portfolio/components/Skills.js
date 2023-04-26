import React from "react";
import Heading from "./Heading";

const Skills = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="Skills" />

      <p className="text-gray-600 -mt-10 mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <p>React.Js</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#376dbe] absolute h-[4px] w-[50%]"></div>
                </div>
            </div>
            <div>
                <p>Next.Js</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#376dbe] absolute h-[4px] w-[35%]"></div>
                </div>
            </div>
            <div>
                <p>Laravel</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#376dbe] absolute h-[4px] w-[65%]"></div>
                </div>
            </div>
            <div>
                <p>PHP</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#376dbe] absolute h-[4px] w-[65%]"></div>
                </div>
            </div>
            <div>
                <p>MERN Stack</p>
                <div className="relative bg-gray-400 h-[4px] mt-2">
                    <div className="bg-[#376dbe] absolute h-[4px] w-[50%]"></div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default Skills;
