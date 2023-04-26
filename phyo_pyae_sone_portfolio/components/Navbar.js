import React from "react";
import Link from "next/link";

import { HiDownload } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'

const Navbar = ({toggleSidebar}) => {
  return (
    <div className="bg-white fixed top-0 w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-[24px]">Phyo Pyae Sone</div>

        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-[#376dbe]">
            Home
          </Link>

          <Link href="/" className="hover:text-[#376dbe]">
            About
          </Link>

          <Link href="/" className="hover:text-[#376dbe]">
            Portfolio
          </Link>

          <Link href="/" className="hover:text-[#376dbe]">
            Blog
          </Link>
          <Link href="/" className="hover:text-[#376dbe]">
            Contact
          </Link>
        </div>

        <a className="hidden md:flex border border-[#376dbe] px-4 py-1 text-[#376dbe] rounded-[5px] items-center gap-2 hover:bg-[#376dbe] 
        hover:text-white transition duration-200">
            Download CV
            <HiDownload />
        </a>

        <div className="md:hidden text-[24px]" onClick={toggleSidebar}>
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
