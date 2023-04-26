import React from "react";
import Heading from "./Heading";
import { RiLightbulbFlashLine } from "react-icons/ri";

const WhatIDo = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="What I Do" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#376dbe] text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Creative Design</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#376dbe] text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Creative Design</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#376dbe] text-white">
          <RiLightbulbFlashLine className="text-[28px]" />
          <h2 className="font-medium text-[20px]">Creative Design</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
