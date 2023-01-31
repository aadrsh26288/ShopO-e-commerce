import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add ,  remove, removeProduct} from '../features/cartSlice'
const Cart = () => {
    // const AddedProducts = useSelector((state)=>state.cart)
  const Products = useSelector(state=>state.cart)
  const dispatch = useDispatch()

  const handleadd = (item) =>{
    dispatch(add(item))
  }
  const handleRemove = (item) =>{
    dispatch(remove(item))
  }

  const handleRemoveProduct=(product)=>{
    dispatch(removeProduct(product))

  }


  return (
    <div className="pt-20">
        <h1 className="aleo text-center text-2xl">My Cart</h1>
        {
          Products.map((added)=>{
            console.log(Products)
                return (
                <main className="  flex border-[1px] border-[#FFBB38] overflow-hidden max-w-[85%] rounded-xl items-center mx-auto my-10 ">
                  <img src={added.img} className="w-[80px] bg-trasnparent"/>
                  <div className='grid grid-cols-2 items-center justify-between w-full mx-4 '>
                    <p className="text-xl aleo ml-10">{added.name}</p> 
                    <div className='flex gap-2 justify-between  w-full items-center' >
                      <div className='flex items-center gap-2'>
                      <button className="bg-[#FFBB38] aleo p-2 mx-2 px-4" onClick={()=>{handleadd(added)}}>+</button>
                      <span>{added.qty}</span>
                      <button className="bg-gray-400 aleo p-2  mx-2 px-4" onClick={()=>{handleRemove(added)}}>-</button>
                      <p className='aleo text-lg font-bold ml-8'>₹ {added.price}</p>
                      </div>
                      <button className=" text-2xl aleo p-2  mx-2 px-4" onClick={()=>{handleRemoveProduct(added)}}>X</button>

                      
                      
                   
                    </div>
                  </div> 
                  
                </main>
                )
            })
        }
    </div>
  )
}

export default Cart