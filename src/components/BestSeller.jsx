/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0,5))
  },[]);

  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                These are our BEST SELLING proucts ijfowjf iwjfgiojv9u3rgi jvknsjovwhjviwhvg
            </p>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
