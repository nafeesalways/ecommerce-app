import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col gap-14 my-10 mt-40 text-sm">
      <div className="sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full sm:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            earum perspiciatis sequi placeat corrupti illo sed soluta,
            necessitatibus voluptates voluptatum!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-323-434-4343</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <hr className="border-gray-300 mb-4" />
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by
          forever.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
