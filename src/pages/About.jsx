import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'}></Title>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4'>
          <p> Forever allows businesses to reach a wider audience and customers to shop conveniently from anywhere, 24/7. Essentially, it's a digital storefront that replicates the functionality of a physical store, including product display, sales transactions, and customer service. </p>
          <p>Offer user-friendly interfaces for creating and customizing e-commerce websites without coding knowledge.Businesses can reach a global audience, expanding their potential customer base.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We will create a profitable environment where individuals can, with dignity, be what they want to be, where integrity, empathy and fun are our guides. We will create and cherish a passion for, and belief in, our company, our products, and our industry</p>
          </div>
            </div>
            <div className='text-4xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
               <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>Forever owns and manages the entire production process—growing aloe on company-owned plantations, processing it in company facilities, and manufacturing final products. This “farm-to-shelf” model is meant to ensure consistent quality and purity.</p>
               </div>
               <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>For Forever Living Products’ e-commerce platform, convenience generally refers to how the brand makes purchasing and distributing products easy for both customers and independent distributors.</p>
               </div>
               <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-600'>Forever maintains customer service departments in each operating country, with phone, email, and sometimes live chat support for order assistance, returns, and product inquiries.</p>
               </div>
            </div>
            <NewsLetterBox></NewsLetterBox>
        </div>
    );
};

export default About;