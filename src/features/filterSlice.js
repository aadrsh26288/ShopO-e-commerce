import { createSlice } from "@reduxjs/toolkit";
import { sampleProdcuts } from "../data/products";

// Define the initial state for the filter slice of the store
const initialState = {
  data: sampleProdcuts,
  category: '',
  rating:0,
  filtered:sampleProdcuts,
  minValue:0,
  maxValue:50000,
  discount:''
};

// Create the filter slice of the store
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // Update the category filter
    updateCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
    // Filter the products based on the current category filter
    filterProducts: (state) => {
      state.filtered = sampleProdcuts.filter((product) => product.category === state.category);
    },

    filterProductsByPrice350to999:(state) => {
      state.filtered= state.filtered.filter((product) => product.price >= 350 &&  product.price <=999)
    },

    // 
      filterProductsByPrice1000to1599:(state) => {
      state.filtered= state.filtered.filter((product) => product.price >= 1000 &&  product.price <=1599)
    },

    // 
      filterProductsByPrice1600to2500:(state) => {
      state.filtered = state.filtered.filter((product) => product.price >= 1600 &&  product.price <=2500)
    },

 
      // 
      filterProductsByPrice3000:(state) => {
      state.filtered= state.filtered.filter((product) => product.price >= 3000 )
    },

    // rating filter
     filterProductsByRating:(state)=>{
      state.filtered = state.filtered.filter((product)=>product.rating === state.rating)

     },
       updateRating: (state, action) => {
      state.rating = action.payload
    },
     
    // discount
    filterdiscount: (state) =>{
      state.filtered = state.filtered.filter((product)=>product.discount === state.discount )

    },
    updateDiscount: (state, action) =>{
      state.discount = action.payload

    },
  


    // remove filters
    
    // clear All
    resetFilters: (state) => {
        state.filtered = sampleProdcuts;
        state.rating = null

    },

    //search Products
    searchProducts: (state,action) => {
      state.filtered=sampleProdcuts.filter(product =>product.name.toLowerCase().includes(action.payload.toLowerCase()))
    },

   

    

    // 
    setMinvalue: (state, action) =>{
      state.minValue=action.payload
    },
    setMaxvalue: (state, action) =>{
      state.maxValue=action.payload
    },
  
  }
});

// Export the actions from the filter slice
export const { filterdiscount,updateDiscount,searchProducts, removeProduct, filterMinMax,setMinvalue,setMaxvalue ,updateCategoryFilter ,filterProducts,filterProductsByPrice350to999, resetFilters,    filterProductsByRating, updateRating , filterProductsByPrice1000to1599, filterProductsByPrice1600to2500,filterProductsByPrice3000} = filterSlice.actions;

// Export the filter reducer
export default filterSlice.reducer;
