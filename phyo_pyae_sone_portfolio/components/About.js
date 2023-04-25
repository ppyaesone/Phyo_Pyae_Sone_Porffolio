import React from "react";
import Heading from "./Heading";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";

import { BsGlobe2 } from "react-icons/bs";

import { TbPacman } from "react-icons/tb";

import { IoLocationOutline } from "react-icons/io5";
import Button from "./Button";

const About = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div>
          <img className="w-[400px]" src="/aboutMe.jpg" alt="aboutMe" />
        </div>

        <div>
          <div className="flex items-center justify-between w-[300px]">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center font-medium">
                <AiOutlineGift className="text-[#376dbe] text-[22px]" />
                Birthday
              </div>
              <div className="flex gap-4 items-center font-medium">
                <FiBookOpen className="text-[#376dbe] text-[22px]" />
                Study
              </div>

              <div className="flex gap-4 items-center font-medium">
                <BsGlobe2 className="text-[#376dbe] text-[22px]" />
                Website
              </div>

              <div className="flex gap-4 items-center font-medium">
                <TbPacman className="text-[#376dbe] text-[22px]" />
                Interest
              </div>

              <div className="flex gap-4 items-center font-medium">
                <IoLocationOutline className="text-[#376dbe] text-[22px]" />
                Location
              </div>
            </div>

            <div className="flex flex-col gap-6 text-gray-600">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>

            <div className="flex flex-col gap-6 text-gray-600">
              <div>1.6.2000</div>
              <div>University of Greenwich</div>
              <div>www.sayargyee.com</div>
              <div>Gaming, MaMa</div>
              <div>Yangon,Burma</div>
            </div>
          </div>
          <div className="max-w-[800px]">
            <h2 className="font-bold mt-16 mb-10">
              I'm PPSone and Junior FullStack Developer
            </h2>
            <p className="text-gray-600">
              Hi! My name is Phyo Pyae Sone. I'm fresh Generated Junior
              FullStack Developer, and I'm very passionate and dedi about my
              work
            </p>
            <Button link="#" text="Hire Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
