import React from 'react'
import MainImg from "../Images/MainImg.png";
import dot from "../Images/dot.png";
import bottle from "../Images/bottle.png";
import {sampleProdcuts} from '../data/products'
import{RxDotFilled} from 'react-icons/rx'
import {CgTally} from 'react-icons/cg'
import {AiFillStar,AiOutlineHeart } from 'react-icons/ai'
import{HiOutlineShoppingBag} from 'react-icons/hi'
const Main = () => {
  return (
    <div>
        
      {/*  */}
   
      



      {/* top Deals  */}
            <div className="flex justify-center items-center gap-4 my-10">
  {/* <div className="h-1 bg-black w-20"></div>  */}
<p className="text-center text-2xl arch font-bold flex items-center gap-2 "><CgTally  className="text-[#FFBB38] "/> TOP PRODUCTS OF THIS WEEK</p>
  {/* <div className="h-1 bg-black w-20"></div>  */}
</div>

      <div className='max-w-[95%] mx-auto gap-4 md:grid-cols-3 sm:grid-cols-2  grid lg:grid-cols-4  my-8'>
        {
          sampleProdcuts.slice(0, 4).map((product)=>{
            return(
         <div className=' bg-[#FFBB38] relative border rounded-xl group cursor-pointer transtion-all delay-300' key={product.id}>
            <div className=' relative rounded-t-xl  group overflow-hidden '>
                <img src={product.img} className='w-full object-fit group-hover:scale-125 transition-all duration-300'/>
                <button className='absolute bottom-0 group-hover:inline hidden arch font-semibold bg-white text-black w-full text-center z-20 border-[1px] border-black transition-all duration-300 p-3 hover:bg-black hover:text-white'>ADD TO CART </button>
            </div>
            <div className=' absolute top-3 justify-between w-full px-2 group-hover:flex hidden'>
              <span className=' bg-white flex gap-1 font-bold text-md items-center aleo justify-center px-2 rounded-md'><AiFillStar className='text-[#FDCC0D] text-xl'/>{product.rating}</span>
                  <span className="text-2xl p-1 rounded-3xl bg-white">
              <AiOutlineHeart />
            </span>
            </div>
            <div className='p-[8px] '>
                
         
                  <span className='text-sm text-gray-600'>{product.category}</span>

                <p className='text-[16px] arch '>{product.name}</p>
                <div className='mt-3 flex justify-between items-center'>             
                  <span className='text-[16px] arch font-semibold'> ${product.price}</span>
                  <span className='bg-black text-sm text-[#ffff] px-1 py-[1px] rounded-[5px]'>-{product.discount}</span>
                </div>
                
 
           
            </div>
        </div>
            )
          })
        }
       
 
      </div>
       <div className="bg-[#F8F9FD] grid md:grid-cols-2 gap-10  py-10 px-5 max-w-[90%] mx-auto my-20 rounded-lg ">
        <img src={MainImg} className="" />
        <div className="">
          <p className="lg:text-[32px] text-[22px] arch text-[#FFBB38] font-bold">Who We Are</p>
          <p className="lg:text-[50px]  text-[22px] arch p-0 m-0 font-semibold lg:leading-[55px] ">
            The best solution for garment needs
          </p>
          {/* <p className="mt-3 text-xl pr-4 aleo arch text-gray-400 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            gravida quis duis tellus ultrices donec sollicitudin.{" "}
          </p> */}
          <div className="mt-5 flex flex-col gap-5 arch text-[#232323]">
            <div className="flex gap-2 items-center">
              {/* <img src={dot} className="w-3 h-3" /> */}
              <RxDotFilled className='text-3xl text-[#FFBB38]'/>
              <p className="text-[16px]">
                User-friendly interface for easy browsing and purchasing.
              </p>
            </div>

            <div className="flex gap-2 items-center">
              {/* <img src={dot} className="w-3 h-3" /> */}
              <RxDotFilled className='text-3xl text-[#FFBB38]'/>
              <p className="text-[16px]">
                Secure payment options for customer protection.
              </p>
            </div>

            <div className="flex gap-2 items-center">
              {/* <img src={dot} className="w-3 h-3" /> */}
              <RxDotFilled className='text-3xl text-[#FFBB38]'/>
              <p className="text-[16px]">
                Mobile optimization for on-the-go shopping.
              </p>
            </div>

            <div className="flex gap-2 items-center">
              {/* <img src={dot} className="w-3 h-3" /> */}
              <RxDotFilled className='text-3xl text-[#FFBB38]'/>
              <p className="text-[16px]">
              Fast and reliable shipping options.
              </p>
            </div>

        </div>
        </div>
      </div>

      {/* Top */}
             <div className="flex justify-center items-center gap-4 my-10">
  {/* <div className="h-1 bg-black w-20"></div>  */}
<p className="text-center text-2xl arch font-bold "> FASHION OF THE WEEK </p>
  {/* <div className="h-1 bg-black w-20"></div>  */}
</div>


      <div className='max-w-[95%] mx-auto gap-4 md:grid-cols-3 sm:grid-cols-2  grid lg:grid-cols-4  my-10'>
  
   {
        sampleProdcuts.filter(f => f.category ==='fashion').map((product)=>{
         return (
                   <div className='bg-[#FFBB38] relative border rounded-xl group cursor-pointer transtion-all delay-300' key={product.id}>
            <div className=' relative rounded-t-xl  group overflow-hidden '>
                <img src={product.img} className='w-full h-[350px] bg-center object-cover group-hover:scale-125 transition-all duration-300'/>
                <button className='absolute bottom-0 group-hover:inline hidden arch font-semibold bg-white text-black w-full text-center z-20 border-[1px] border-black transition-all duration-300 p-3 hover:bg-black hover:text-white'>ADD TO CART </button>
            </div>
            <div className=' absolute top-3 justify-between w-full px-2 group-hover:flex hidden'>
              <span className=' bg-white flex gap-1 font-bold text-md items-center aleo justify-center px-2 rounded-md'><AiFillStar className='text-[#FDCC0D] text-xl'/>{product.rating}</span>
                  <span className="text-2xl p-1 rounded-3xl bg-white">
              <AiOutlineHeart />
            </span>
            </div>
            <div className='p-[8px] '>
                
         
           <span className='text-sm text-gray-600'>{product.category}</span>
                <p className='text-[16px] arch font-medium'>{product.name}</p>
                <div className='mt-3 flex justify-between items-center'>             
                  <span className='text-[16px] font-semibold'> ${product.price}</span>
                  <span className='bg-black text-sm text-[#ffff] px-1 py-[1px] rounded-[5px]'>-{product.discount}</span>
                </div>

            </div>
        </div>
         )
        })
      
      }
      </div>

   

    </div>
  )
}

export default Main