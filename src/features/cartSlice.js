import { createSlice } from "@reduxjs/toolkit";
import {sampleProdcuts} from '../data/products'

const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            const exist = state.find((x)=>x.id === action.payload.id)
            if(exist){
                exist.qty++
            }else{
                state.push({...action.payload,qty:1})
            }
        },
        remove:(state, action)=>{
            // alert(action.payload.id)
           const exist = state.find((x)=>x.id === action.payload.id)
        //    alert(exist.qty)
            if(exist.qty===1){
               return state.filter(x=>x.id !== action.payload.id)     
            }else{
              return state.map((x)=>x.id === action.payload.id ? {...exist,qty:exist.qty-1}:x)
            }
        },
         removeProduct: (state, action) =>{
      return state.filter(x=>x.id !== action.payload.id)
    },

  
  
 
    }
})


export const {add,remove,removeProduct} = cartSlice.actions
export default cartSlice.reducer