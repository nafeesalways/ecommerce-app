import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems,setCartItems] =useState({});
  const addToCart = async(itemId,size)=>{

    if(!size){
      toast.error('Select Product Size');
      return;
    }
    let cardData = structuredClone(cartItems);
    if(cardData[itemId]){
      if(cardData[itemId][size]){
        cardData[itemId][size]+=1;
      }
      else{
        cardData[itemId][size] =1;
      }
    }
    else{
      cardData[itemId] ={};
      cardData[itemId][size]=1;
    }
    setCartItems(cardData);
  }

const getCartCount =()=>{
  let totalCount = 0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
      try{
  if(cartItems[items][item]>0){
    totalCount +=cartItems[items][item];
  }
      }catch(err){
console.log(err)
      }
    }
  }
  return totalCount;
}

const updateQuantity=async (itemId,size,quantity)=>{
let cartData = structuredClone(cartItems);
cartData[itemId][size] = quantity;
setCartItems(cartData);
}


  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity

  };
  return <ShopContext value={value}>{children}</ShopContext>;
};

export default ShopContextProvider;
