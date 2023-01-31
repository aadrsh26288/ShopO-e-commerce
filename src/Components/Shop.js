import React, { useState } from "react";
import {
  GiClothes,
  GiSofa,
  GiDress,
  GiFruitBowl,
  GiLipstick,
} from "react-icons/gi";
import { sampleProdcuts } from "../data/products";
import { HiDeviceMobile } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {
  filterdiscount,updateDiscount,
  setMinvalue,
  setMaxvalue,
  updateCategoryFilter,
  filterProducts,
  resetFilters,
  filterProductsByPrice350to999,
  updateRating,
  filterProductsByRating,
  filterProductsByPrice1600to2500,
  filterProductsByPrice3000,
  filterProductsByPrice1000to1599,
} from "../features/filterSlice";
import { add } from "../features/cartSlice";
import Rating from "@mui/material/Rating";
import { RxCross2 } from "react-icons/rx";
// import{FcBusinessman} from 'react-icons/fi'

const Shop = () => {
  const { filtered, minValue, maxValue } = useSelector((state) => state.filter);
  const fullFiltered = filtered.filter(
    (product) => product.price >= minValue && product.price <= maxValue
  );
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.filter);
  const rating = useSelector((state) => state.filter.rating);

  const [cat1, setCat1] = useState();
  const [price, setPrice] = useState();
  const [price2, setPrice2] = useState();
  const [price3, setPrice3] = useState();
  const [price4, setPrice4] = useState();
  const show = fullFiltered.length != 0 ? "hidden" : "flex";
  const clearShow = cat1 || price || price2 || price3 || price4 || rating ? "flex" : "hidden"

  const handleCheckboxChange = (category) => {
    dispatch(updateCategoryFilter(category));
    dispatch(filterProducts());
    setCat1(category);
  };

  // filterProductsByPrice350to999
  const handleFilter350to999 = () => {
    dispatch(filterProductsByPrice350to999());
    alert("clicked");
    setPrice("350 - 999");
  };

  const handleFilter1000to1599 = () => {
    dispatch(filterProductsByPrice1000to1599());
    setPrice2("1000-1599");
  };

  const handleFilter1600to2500 = () => {
    dispatch(filterProductsByPrice1600to2500());
    setPrice3("1600-2500");
  };

  const handleFilter3000above = () => {
    dispatch(filterProductsByPrice3000());
    setPrice4("3000 above");
  };
  // reset filters
  const handlereset = () => {
    dispatch(resetFilters());
    alert("clicked");
    setPrice("");
    setPrice2("");
    setPrice3("");
    setPrice4("");
    setCat1("");
  };



  //
  const handleRatingChange = (event, newValue) => {
    dispatch(updateRating(newValue));
    dispatch(filterProductsByRating());
  };

  // handleMinValueChange
  const handleMinValueChange = (e) => {
    dispatch(setMinvalue(e.target.value));
  };

  //handleMaxValueChange
  const handleMaxValueChange = (e) => {
    dispatch(setMaxvalue(e.target.value));
  };

  // filterdiscount,updateDiscount,
  const handlediscount = (category)=>{
   dispatch(updateDiscount(category))
    dispatch(filterdiscount())
    
  }

  // add products
  const handleAddProducts = (product) => {
    dispatch(add(product));
    alert("button is clicked");
  };

  return (
    <div className="pt-20">
      <p className="text-center p-2 text-2xl aleo flex   items-center justify-center gap-2">
        Start Shopping <HiOutlineShoppingBag className="mt-1 text-[#FFBB38]" />
      </p>

      <div className="flex py-4  gap-1 px-2">
        <p className="">
          {cat1 ? (
            <p className="bg-gray-400 p-2 flex items-center gap-2 rounded-lg aleo">
              {cat1} <RxCross2 className="text-xl mt-1 cursor-pointer" ></RxCross2>
            </p>
          ) : (
            ""
          )}{" "}
        </p>
        <p className="">
          {price ? (
            <p className="bg-gray-400 p-2 flex items-center gap-2 rounded-lg aleo">
              {" "}
              ₹ {price} <RxCross2 className="text-xl mt-1"></RxCross2>
            </p>
          ) : (
            ""
          )}{" "}
        </p>
        <p className="">
          {price2 ? (
            <p className="bg-gray-400 p-2 flex items-center gap-2 rounded-lg aleo">
              {" "}
              ₹ {price2} <RxCross2 className="text-xl mt-1"></RxCross2>
            </p>
          ) : (
            ""
          )}{" "}
        </p>
        <p className="">
          {price3 ? (
            <p className="bg-gray-400 p-2 flex items-center gap-2 rounded-lg aleo">
              {" "}
              ₹ {price3} <RxCross2 className="text-xl mt-1"></RxCross2>
            </p>
          ) : (
            ""
          )}{" "}
        </p>
        <p className="">
          {price4 ? (
            <p className="bg-gray-400 p-2 flex items-center gap-2 rounded-lg aleo">
              {" "}
              ₹ {price4} <RxCross2 className="text-xl mt-1"></RxCross2>
            </p>
          ) : (
            ""
          )}{" "}
        </p>

        <p className="">
          {rating ? (
            <p className="bg-gray-400 p-2 flex items-center gap-2 rounded-lg aleo">
              {rating} Star <RxCross2 className="text-xl mt-1"></RxCross2>
            </p>
          ) : (
            ""
          )}{" "}
        </p>

        <button onClick={()=>{handlereset()}} className={`${clearShow} items-center gap-2 rounded-lg aleo`}>clear</button>

      </div>

      {/*  */}
      <div className="flex gap-5  md:flex-row flex-col ">
        {/* filter */}
        <div className="bg-white border-[1px] text-black grid grid-cols-3 md:flex flex-col  md:items-start items-center md:w-[250px] text-sm  ">
          <div className="p-2 w-full  inline md:px-4 md:flex flex-col gap-2 md:border-b-[1px]">
            <p className="text-lg font-semibold alice ">
              Filters{" "}
              <span className=" hidden md:flex text-gray-500 text-sm">
               <span>({filtered.length} Items)</span> 
              </span>
            </p>
          </div>
          {/* rating */}
          <div className="md:p-2 md:px-4 flex flex-col gap-2 md:border-b-[1px] w-full ">
            <p className="text-lg font-semibold alice">Rating</p>
            <div className="flex items-center gap-2 ">
              <Rating
                name="half-rating"
                defaultValue={0}
                precision={0.5}
                value={rating}
                className=''
                onChange={handleRatingChange}
              />
              <span className=" text-[17px] font-semibold alice">
                {rating ? <p>{rating} Star</p> : ""}
              </span>
            </div>
          </div>
          {/*  */}
          <div className="p-2 md:px-4 flex md:flex-col gap-2 md:gap-0 md:border-b-[1px]">
            <label className="aleo ">
              Min Price:
              <input
                type="number"
                className="p-2 w-16 md:w-full text-black border-[1px] border-black outline-none rounded-md"
                value={minValue}
                onChange={handleMinValueChange}
              />
            </label>
            <br />
            <label className="aleo ">
              Max Price:
              <input
                type="number"
                className="p-2 w-16 text-black md:w-full border-[1px] border-black outline-none rounded-md"
                value={maxValue}
                onChange={handleMaxValueChange}
              />
            </label>
          </div>

          {/* filter/categories */}

          <div className="p-2 px-4 flex flex-col gap-2 md:border-b-[1px] w-full">
            <p className="text-lg font-semibold alice  ">Categories</p>
            <div className="flex items-center gap-2 cursor-pointer aleo ">
              <GiClothes className="text-2xl " />
              <span
                className=""
                onClick={() => {
                  handleCheckboxChange("clothes");
                }}
              >
                Clothes
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer aleo">
              <GiSofa className="text-2xl" />
              <span
                className=""
                onClick={() => {
                  handleCheckboxChange("home");
                }}
              >
                Home
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer aleo">
              <HiDeviceMobile className="text-2xl" />
              <span
                className=""
                onClick={() => {
                  handleCheckboxChange("electronics");
                }}
              >
                Electronics
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer aleo">
              <GiFruitBowl className="text-2xl" />
              <span
                className=""
                onClick={() => {
                  handleCheckboxChange("groceries");
                }}
              >
                Groceries
              </span>
            </div>

              <div className="flex items-center gap-2 cursor-pointer aleo">
              <GiLipstick className="text-2xl" />
              <span
                className=""
                onClick={() => {
                  handleCheckboxChange("fashion");
                }}
              >
                Fashion
              </span>
            </div>
          </div>

          {/* filter/discount */}
          <div className="p-2 px-4 flex flex-col gap-2 md:border-b-[1px] text-sm w-full ">
            <p className="text-lg font-semibold alice ">Top discounts %</p>
            <span className="aleo cursor-pointer" onClick={()=>{handlediscount('10%')}}>10% discount</span>
            <span className="aleo cursor-pointer" onClick={()=>{handlediscount('20%')}}>20% discount</span>
            <span className="aleo cursor-pointer" onClick={()=>{handlediscount('30%')}}>30% discount</span>
            <span className="aleo cursor-pointer" onClick={()=>{handlediscount('40%')}}>40% discount</span>
            <span className="aleo cursor-pointer" onClick={()=>{handlediscount('50%')}}>50% discount</span>
          </div>

          {/* filter/price */}
          <div className="p-2 px-4 flex flex-col gap-2 md:border-b-[1px] text-sm w-full ">
            <p className="text-lg font-semibold alice ">Price</p>
            <span
              className="aleo cursor-pointer"
              onClick={() => {
                handleFilter350to999();
              }}
            >
              Rs. 350 to Rs. 999
            </span>
            <span
              className="aleo cursor-pointer"
              onClick={() => {
                handleFilter1000to1599();
              }}
            >
              Rs. 1000 to Rs. 1599
            </span>
            <span
              className="aleo cursor-pointer"
              onClick={() => {
                handleFilter1600to2500();
              }}
            >
              Rs. 1600 to Rs. 2500
            </span>
            <span
              className="aleo cursor-pointer"
              onClick={() => {
                handleFilter3000above();
              }}
            >
              Rs. 3000 above
            </span>
          </div>

          {/*  */}
        </div>

        {/* products */}
        <div className="w-full ">
          <div className={`w-[100%] ${show} h-auto flex justify-center mt-32`}>
            {fullFiltered.length === 0 ? (
              <p className=" text-3xl alice text-[#FF497C]">No Items Found</p>
            ) : (
              ""
            )}
          </div>
          <div className="-mt-1  max-w-[100%] mx-auto gap-4 grid-cols-2 md:grid-cols-3 sm:grid-cols-2  grid lg:grid-cols-4 my-8 pr-4">
            {fullFiltered?.map((product) => {
              return (
          
                          <div className='bg-[#FFBB38] relative border rounded-xl group cursor-pointer transtion-all delay-300' key={product.id}>
            <div className=' relative rounded-t-xl  group overflow-hidden '>
                <img src={product.img} className='w-full h-[330px] bg-center object-cover group-hover:scale-125 transition-all duration-300'/>
                <button className='absolute bottom-0 group-hover:inline hidden arch font-semibold bg-white text-black w-full text-center z-20 border-[1px] border-black transition-all duration-300 p-3 hover:bg-black hover:border-white hover:text-white' onClick={()=>{handleAddProducts(product)}}>ADD TO CART </button>
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
                  <span className='text-[16px] font-semibold'> ${product.price}</span>
                  <span className='bg-black text-sm text-[#ffff] px-1 py-[1px] rounded-[5px]'>-{product.discount}</span>
                </div>
                
 
           
            </div>
        </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;