import React, { Component } from "react";
import Slider from "react-slick";
import Carousel from "react-material-ui-carousel";

import { Paper, Button } from "@mui/material";
import slide1 from "../Images/Slide1.png";
import slide2 from "../Images/Slide2.png";
import slide3 from "../Images/Slide3.png";
import slide4 from "../Images/Slide4.png";
import slide5 from "../Images/Slide5.png";
import Laptop from "../Images/Laptop.png";
import chair from "../Images/chair.png";
import heel from "../Images/heel.png";
import tshirt from "../Images/tshirt.png";
import { AiOutlineHeart } from "react-icons/ai";
import Main from "./Main";
import { Link } from "react-router-dom";
import { MdCategory, MdOutlineLocalOffer } from "react-icons/md";
import ReactPlayer from "react-player";

const Home = () => {
  // images
  // https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_01_9e9ee306-65ab-4e2e-9a19-c54fa8039f8a_x1024.png?v=1613745760
  // //cdn.shopify.com/s/files/1/0130/5041/3114/files/i_video.mp4?v=1531219306

  const src =
    "cdn.shopify.com/s/files/1/0130/5041/3114/files/i_video.mp4?v=1531219306";

  return (
    <div className="lg:-mt-10">
      <Example2></Example2>
      {/* gallery / category */}
      {/* <div> */}
      <div className="flex justify-center items-center gap-4 my-10">
        <p className="text-center text-2xl arch font-bold  flex items-center gap-2 ">
          <MdCategory className="text-[#FFBB38]" />
          CATEGORIES
        </p>
      </div>

      <div className="mb-10 mx-5  grid grid-cols-2 sm:grid-cols-4 gap-2 h-full grid-rows-auto grid-flow-row-dense auto-rows-auto">
        <div className="relative backdrop-blur-xl  group  overflow-hidden ">
          <div className="h-full ">
            <img
              className="h-full object-cover backdrop-blur-xl group-hover:scale-125 transition-all "
              src="https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60"
            />
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center">
            <button className="bg-[#FFBB38] duration-300 px-8 hover:bg-white hover:text-black font-medium py-2 text-white arch mt-3  ">
              CLOTHES
            </button>
          </div>
        </div>

        <div className="relative sm:row-span-1 sm:col-span-1 overflow-hidden group ">
          <div className="h-full">
            <img
              className="h-full group-hover:scale-125 object-cover  transition-all duration-300"
              src="https://images.pexels.com/photos/3981749/pexels-photo-3981749.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center">
            <button className="bg-[#FFBB38] duration-300 px-8 hover:bg-white hover:text-black font-medium py-2 text-white arch mt-3 ">
              ELECTRONICS
            </button>
          </div>
        </div>

        <div className="relative sm:row-span-2 bg-red-400 col-span-2 overflow-hidden  sm:col-auto group">
          <div className="h-full ">
            <img
              className="h-full group-hover:scale-125 object-cover  transition-all duration-300"
              src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_06_1800x.jpg?v=1614290467"
            />
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center">
            <button className="bg-[#FFBB38] duration-300 px-8 hover:bg-white hover:text-black font-medium py-2 text-white arch mt-3 ">
              FASHION
            </button>
          </div>
        </div>

        <div className="relative group overflow-hidden ">
          <div className="h-full">
            <img
              className="h-full group-hover:scale-125 object-cover  transition-all "
              src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center">
            <button className="bg-[#FFBB38] duration-300 px-8 hover:bg-white hover:text-black font-medium py-2 text-white arch mt-3 ">
              MEN
            </button>
          </div>
        </div>

        <div className="sm:row-span-3 group overflow-hidden relative ">
          <div className="h-full">
            <img
              className="h-full group-hover:scale-125 object-cover transition-all"
              src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            />
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center">
            <button className="bg-[#FFBB38] duration-300 px-8 hover:bg-white hover:text-black font-medium py-2 text-white arch mt-3 ">
              HOME
            </button>
          </div>
        </div>

        <div className="relative group overflow-hidden sm:row-span-1 bg-red-400 row-span-2 ">
          <div className="h-full">
            <img
              className="h-full   group-hover:scale-125 object-cover transition-all"
              src="https://images.unsplash.com/photo-1617500603321-bcd6286973b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdyb2Nlcnl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            />
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center">
            <button className="bg-[#FFBB38] duration-300 px-8 hover:bg-white hover:text-black font-medium py-2 text-white arch mt-3 ">
              GROCERY
            </button>
          </div>
        </div>

        <div className="relative group overflow-hidden row-span-1 bg-red-400 ">
          <div className="h-full">
            <img
              className="h-full   group-hover:scale-125 object-cover transition-all"
              src="https://images.unsplash.com/photo-1631730486784-5456119f69ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG1ha2UlMjB1cHxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60"
            />
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center">
            <button className="bg-[#FFBB38] duration-300 px-8 hover:bg-white hover:text-black font-medium py-2 text-white arch mt-3 ">
              MAKEUP
            </button>
          </div>
        </div>

        <div className="relative sm:row-span-2 sm:col-span-3 bg-red-400 group overflow-hidden   ">
          <div className="h-full">
            <img
              className="h-full group-hover:scale-125 object-cover transition-all delay-150 duration-300"
              src="https://cdn.shopify.com/s/files/1/0616/9480/4174/files/loobook.jpg?v=1652089277&width=1600"
            />
          </div>
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center">
            <button className="bg-[#FFBB38] duration-300 px-8 hover:bg-white hover:text-black font-medium py-2 text-white arch mt-3 ">
              WOMEN
            </button>
          </div>
        </div>
      </div>

      <div className="my-20">
        <div className="flex justify-center items-center gap-4 my-10 ">
          {/* <div className="h-1 bg-black w-20"></div>  */}
          <p className="text-center text-2xl arch font-bold uppercase flex items-center gap-2">
            <MdOutlineLocalOffer className="text-[#FFBB38] " /> January Super
            Flash Sale
          </p>
          {/* <div className="h-1 bg-black w-20"></div>  */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-[95%] mx-auto">
          <div className="border shadow-sm rounded-lg p-0">
            <img
              src="https://i.etsystatic.com/25625732/c/2000/1589/0/222/il/653ef3/3731402704/il_680x540.3731402704_b7t5.jpg"
              className=" sm:h-[170px] object-cover w-full rounded-t-lg"
            />
            <div className="p-2">
              <span>Up to 30% off on</span>
              <p className="text-xl alice">Men's Clothing</p>
            </div>
          </div>

          <div className="border shadow-sm rounded-lg p-0">
            <img
              src="https://i.etsystatic.com/38095093/c/2000/1589/0/0/il/a89591/4421566361/il_680x540.4421566361_14lm.jpg"
              className="h-[170px] object-cover w-full rounded-t-lg"
            />
            <div className="p-2">
              <span>Up to 10% off on</span>
              <p className="text-xl alice">Women's Clothing</p>
            </div>
          </div>

          <div className="border shadow-sm rounded-lg p-0">
            <img
              src="https://i.etsystatic.com/32149632/r/il/6d9db7/4562187623/il_680x540.4562187623_3b3b.jpg"
              className="h-[170px] object-cover w-full rounded-t-lg"
            />
            <div className="p-2">
              <span>Up to 60% off on</span>
              <p className="text-xl alice">All Footwear's</p>
            </div>
          </div>

          <div className="border shadow-sm rounded-lg p-0">
            <img
              src="https://i.etsystatic.com/17362239/r/il/c05b2d/1963332383/il_680x540.1963332383_e0b2.jpg"
              className="h-[170px] object-cover w-full rounded-t-lg"
            />
            <div className="p-2">
              <span>Up to 48% off on</span>
              <p className="text-xl alice"> Fashion Jewellery</p>
            </div>
          </div>

          <div className="border shadow-sm rounded-lg p-0">
            <img
              src="https://i.etsystatic.com/36844061/r/il/e160e8/4569278449/il_680x540.4569278449_j70v.jpg"
              className="h-[170px] object-cover w-full rounded-t-lg"
            />
            <div className="p-2">
              <span>Up to 50% off on</span>
              <p className="text-xl alice">Modren Camera's</p>
            </div>
          </div>
        </div>
      </div>

      <Main />
      <div className="mt-40">
        <Link to="shop">
          <Example />
        </Link>
      </div>
    </div>
  );
};

export default Home;

function Example(props) {
  var items = [
    {
      img: "https://sslimages.shoppersstop.com/sys-master/root/hc7/he0/28940164399134/EOSS-Web_487385_xnnnsnjajkjaaja.gif",
    },
    {
      img: "https://sslimages.shoppersstop.com/sys-master/root/hc9/h8e/29030498041886/men_top-baner-web_kjsdhfgsdfhsjdfniweury287354635.jpg",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_01_9e9ee306-65ab-4e2e-9a19-c54fa8039f8a_x1024.png?v=1613745760",
    },
    {
      img: "https://sslimages.shoppersstop.com/sys-master/root/hd5/ha3/29030498697246/footwear_top-baner-web_hsdgjvsdgyfsd478436.jpg",
    },
    {
      img: "https://sslimages.shoppersstop.com/sys-master/root/h7c/h2b/29008667213854/fragrances_top-baner-web--without-eoss-logo-main-carousel-2023-01-07-hpe.jpg",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper className=" bg-green-700" style={{ background: "#00000" }}>
      <img src={props.item.img} className="h-full " />
    </Paper>
  );
}

function Example2(props) {
  const items2 = [
    {
      // img:'https://sslimages.shoppersstop.com/sys-master/root/h29/hbe/29045434089502/jhoomo-re-web--2023-01-13-new-denim-gif-00.gif',
      img: "https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_01_9e9ee306-65ab-4e2e-9a19-c54fa8039f8a_x1024.png?v=1613745760",
      title1: " HOT DEAL THIS WEEK",
      title2: "NEW COLLECTION UP TO 50% OFF",
      c1: "#698076",
      bg: "white",
      c2: "",
    },
    // {
    // img:'https://sslimages.shoppersstop.com/sys-master/root/hae/h7e/28892515860510/Static-Skykar-Webfdzvfxneverofgf20221222.jpg',
    // title:'ho '
    // },
    {
      // img:'https://sslimages.shoppersstop.com/sys-master/root/h80/h82/28892515729438/Static-Skechers-Web--never-offer-before-2022-12-22-hp-pagew.jpg',
      img: "https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_02_4c388999-0b9a-4a73-9fe7-1ca465ec8140_x1024.png?v=1613745760",
      title1: "EXCULSIVE OFFER",
      title2: "FASHION FOR UPCOMING SUMMER ",

      c1: "white",
      bg: "white",
      c2: "",
    },
    {
      img: "https://template.annimexweb.com/optimal/assets/images/slideshow/demo24-banner1.jpg",
      title1: "EXCULSIVE OFFER",
      title2: "CLASSIC COATS",

      c1: "black",
      bg: "black",
      c2: "",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0616/9480/4174/files/slider-01.jpg?v=1652056793",
      title1: " HOT DEAL THIS WEEK",
      title2: "NEW COLLECTION UP TO 50% OFF",
      c1: "#698076",
      bg: "black",
      c2: "",
    },
  ];

  return (
    <Carousel>
      {items2.map((item, i) => (
        <Item2 key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item2(props) {
  return (
    <Paper className=" bg-green-700" style={{ background: "#00000" }}>
      <div className="relative">
        <img
          src={props.item.img}
          className="md:h-[540px] h-[350px] bg-start md:bg-center object-cover"
        />
        <div className=" absolute inset-0  flex flex-col items-center justify-center z-20">
          <h1 className="arch sm:text-3xl text-2xl text-center font-semibold text-[#2879FE]">
            {props.item.title1}
          </h1>
          <h1
            className={`arch sm:text-6xl text-4xl font-bold text-center text-${props.item.c1} `}
          >
            {props.item.title2}
          </h1>
          <Link to="/shop">
            {" "}
            <button className="bg-[#FFBB38]  px-20 hover:bg-white hover:text-black font-semibold py-3 duration-300 text-white arch mt-3">
              SHOP
            </button>
          </Link>
        </div>
      </div>
    </Paper>
  );
}