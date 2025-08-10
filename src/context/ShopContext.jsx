import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext= createContext();

const ShopContextProvider =({children})=>{
    const currency = '$';
    const deliveryFee = 10;
    const value={
    products,currency,deliveryFee
    }
    return(
        <ShopContext value={value}>
   {children}
        </ShopContext>
    )
}

export default ShopContextProvider;