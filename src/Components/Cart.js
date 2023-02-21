import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, removeProduct } from "../features/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
const Cart = () => {
  // const AddedProducts = useSelector((state)=>state.cart)
  const Products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleadd = (item) => {
    dispatch(add(item));
  };
  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className="pt-20">
      <h1 className="aleo text-center text-2xl pb-5">My Cart</h1>
      <div className="bg-[#FFBB38]  mx-auto md:max-w-[85%] hidden md:flex justify-between px-4">
        <p>Product</p>
        <p>Description</p>
        <p className="ml-28">Quantity</p>
        <p>Price</p>
        <p>Close</p>
      </div>

      {Products.map((added) => {
        console.log(Products);
        return (
          <main className="  flex items-center justify-center flex-row border-[1px] border-[#FFBB38] overflow-hidden md:max-w-[85%] rounded-xl items-center mx-auto my-10 ">
            <img src={added.img} className="w-[80px] bg-trasnparent" />
            <div className="grid sm:grid-cols-2  items-center justify-between w-full mx-4 ">
              <p className="md:text-xl aleo ml-10 text-start">{added.name}</p>
              <div className="flex gap-2   justify-between  w-full items-center">
                <div className="flex items-center gap-2 w-full">
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-[#FFBB38] aleo p-2 mx-2 sm:px-4"
                      onClick={() => {
                        handleadd(added);
                      }}
                    >
                      +
                    </button>
                    <span>{added.qty}</span>
                    <button
                      className="bg-gray-400 aleo p-2  mx-2 sm:px-4"
                      onClick={() => {
                        handleRemove(added);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="flex items-center justify-between  w-full ">
                    <p className="aleo text-lg font-bold ml-20">
                      ₹ {added.price}
                    </p>
                    <button
                      className=" text-2xl aleo p-2  mx-2 sm:px-4"
                      onClick={() => {
                        handleRemoveProduct(added);
                      }}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default Cart;