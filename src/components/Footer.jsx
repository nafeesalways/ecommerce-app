import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full d:w-2/3 text-gray-600'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis earum perspiciatis sequi placeat corrupti illo sed soluta, necessitatibus voluptates voluptatum! Repellat unde similique blanditiis deserunt fuga modi, ea ipsam qui repellendus. Distinctio!
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-323-434-4343</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
            <div>
                <hr />
                <p className='text-sm py-5 text-center'>Copyright © {new Date().getFullYear()} - All right reserved by forever.com</p>
            </div>
        </div>
    );
};

export default Footer;