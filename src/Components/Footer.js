import React from 'react'
import{GoLocation,GoMail,} from 'react-icons/go'
import{GiPhone} from 'react-icons/gi'
import {HiPhone} from 'react-icons/hi'
import{FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (

   <footer className="bg-[#f6f6f8] mt-22 ">
    <div className="px-10 mx-auto grid mt-20 grid-cols-4 justify-items-center gap-3 py-10">
        <div className='text-[16px] text-gray-500 arch'>
         <img src='https://shopo.quomodothemes.website/assets/images/logo.svg'className="w-22 "/>
         <div className='mt-4 flex flex-col gap-2'>
        <p className='flex gap-1 items-start'><GoLocation className='mt-1'/>184 Main Rd E, St Albans VIC 3021, Australia</p>
         <p className='flex gap-1 items-start'><GoMail className='mt-1'/>contact@company.com</p>
         <p className='flex gap-1 items-start'><HiPhone className='mt-1'/>+001 2233 456</p>
         <div className='flex gap-4 mt-2 items-center'>
            <FaFacebookF/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedinIn/>
         </div>
         <div>

         </div>
        </div>
         </div>
      

        <div>
            <p className="arch text-2xl">Categories</p>
             <p className="text-[16px] text-gray-500 arch">Men</p>
            <p className="text-[16px] text-gray-500 arch">Home</p>           
            <p className="text-[16px] text-gray-500 arch">Women</p>
            <p className="text-[16px] text-gray-500 arch">Fashion</p>
            <p className="text-[16px] text-gray-500 arch">Electronics</p>

        </div>

      <div>
            <p className="arch text-2xl">Infomation</p>
             <p className="text-[16px] text-gray-500 arch">About Us</p>
             <p className="text-[16px] text-gray-500 arch">Contact Us</p>
             <p className="text-[16px] text-gray-500 arch">Terms & Conditions</p>
             <p className="text-[16px] text-gray-500 arch">Returns & Exchanges</p>
             <p className="text-[16px] text-gray-500 arch">Privacy Policy</p>



            
        </div>

         <div>
            <p className="arch text-2xl">Useful links</p>
             <p className="text-[16px] text-gray-500 arch">Latest News</p>
             <p className="text-[16px] text-gray-500 arch">My Account</p>
             <p className="text-[16px] text-gray-500 arch">Size Guide</p>
             <p className="text-[16px] text-gray-500 arch">FAQs</p>

             
        </div>

       
    </div>
   </footer> 

  )
}

export default Footer
