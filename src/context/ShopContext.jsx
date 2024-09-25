/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const[search, setSearch] = useState("");
  const[showSearch, setShowSearch] = useState(false); //if true we will display the search bar, if not we will hide the search bar
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch, 
    setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
