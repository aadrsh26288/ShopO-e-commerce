import React from 'react'
import logo from '../Images/logo.png'
import search from '../Images/search.png'
import {BsFillPersonFill,BsSuitHeart} from 'react-icons/bs'
import{AiOutlineHeart,AiOutlineSearch} from 'react-icons/ai'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import mylogo from '../Images/Calistya.png'

const Header = () => {
  const addeditems = useSelector(state=>state.cart)

  return (
    <header className="fixed arch z-40 gap-5 p-2 flex items-center justify-between  w-full  bg-white">
       <div className="flex items-center gap-2 ">
        <Link to='/'>
         <img src='https://shopo.quomodothemes.website/assets/images/logo.svg'className="w-22 "/>
        </Link>
        
         {/* <p className="text-3xl font-bold">ShopEase</p> */}
       </div>
        
        <div className='flex gap-8'>
         <Link to='shop'> <p className="text-[18px] font-medium">Shop</p></Link>  
            <p className="text-[18px] font-medium">Services</p>
            <p className="text-[18px] font-medium">Sale</p>
            <p className="text-[18px] font-medium">Contact</p>
        </div>
        <div className='border bg-white w-[450px] border-[#FF497C] shadow-sm  rounded-2xl border-black flex items-center px-6 gap-2 '>
             <AiOutlineSearch size={25}/>
            <input type="text" className="p-2 outline-none w-full  " placeholder="Search..."></input>
        </div>

        <div className='flex items-center justify-end gap-5 '>
            <div className='flex flex-col justify-center items-center'>
                <BsFillPersonFill size={25} className=" "/>
                <span className='text-sm'>Profile</span>
            </div>
              <div className='flex flex-col justify-center items-center'>
                <AiOutlineHeart size={25}  className=" "/>
                <span className='text-sm arch'>wishlist</span>
            </div>
            <Link to='/cart'>
              <div className='flex flex-col justify-center items-center'>
               <div className='flex'>
                  <HiOutlineShoppingBag size={25}  className=""/>
                 <span className=' text-[#FF497C] '>{addeditems.length}</span>
               </div>
              
                <span className='text-sm '>cart</span>
            </div>
   
   </Link>
        </div>

        <div>
        </div>
 

  


    </header>
  )
}

export default Header