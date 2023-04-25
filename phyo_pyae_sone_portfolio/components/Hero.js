import React from "react";
import Link from "next/link";
import Button from "./Button";

import Typewriter from "typewriter-effect"


const Hero = () => {
  return (
    <div className="bg-[url('/hero.jpg')] h-screen bg-cover bg-center bg-fixed flex items-center">
        <div className="container mx-auto px-4">
            <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
                <div>
                    <h1 className="text-5xl">I'm Phyo Pyae Sone</h1>
                    <h4 className="text-2xl mt-3">
                        <Typewriter
                            options={{
                                strings : [
                                    "Junior FullStack Developer",
                                    "UI/UX designer"
                                ],
                                changeDelay: 3,
                                changeDeleteSpeed: 2,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h4>
                </div>

                <div className="bg-[#376dbe] h-[2px] w-[40px]"></div>

                <div>
                <p>In a Professional context it often happens that private clients corder a publication to the made. </p>
                
                <Button link="#" text="Learn More" />
                </div> 


            </div>
        </div>
        
    </div>
  );
};

export default Hero;
