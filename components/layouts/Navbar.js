import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="px-10 py-6 flex justify-between item-center font-medium position-sticky">
      <div>
        <a
          href="#"
          className="flex item-center justify-center bg-black text-white w-fit p-2 rounded-full h-10 w-10 transition-colors hover:bg-purple-800"
        >
          H
        </a>
      </div>
      <div className="space-x-10">
        <a href="#" className="hover:text-purple-800">
          Home
        </a>
        <a href="#" className="hover:text-purple-800">
          Work
        </a>
        <a href="#" className="hover:text-purple-800">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
