/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react"
import {ShopContext} from '../context/ShopContext'
import { assets } from "../assets/frontend_assets/assets";
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  //state variables for the filter logic
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  //handling the category toggles
  const toggleCategory = (event) => {
    if (category.includes(event.target.value)) {
      setCategory(prev => prev.filter(item => item !== event.target.value))
    } else {
      setCategory(prev => [...prev, event.target.value])
    }
  }
  //handling sub-category toggles
  const toggleSubCategory = (event) => {
    if (subCategory.includes(event.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== event.target.value))
    } else {
      setSubCategory(prev => [...prev, event.target.value])
    }
  }
  //application of the filter functionalities
  const applyFilter = () => {
    let productsCopy = products.slice(); //creating an copy of products array in this variable
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy);
  }
  //application of the sorting functionalities
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    if (sortType == 'low-high') {
      setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
    }
    else if (sortType == 'high-low') {
      setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
    }
    else {
      applyFilter();
    }
  }
  //any change in the category and subcategory will trigger this useEffect
  useEffect(() => {
    applyFilter();
  },[category, subCategory])

  //any chnage in the sort type state variable will trigger this useEffect
  useEffect(() => {
    sortProduct();
  },[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS</p>
        <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        {/* Categoru Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-=2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* Sub category filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-=2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side (for the products) */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* product sort feature */}
          <select onChange={(event) => setSortType(event.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevance</option>
            <option value="low-high">ort by: Low to High</option>
            <option value="high-low">ort by: Hight to Low</option>
          </select>
        </div>
        {/* map the products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          { filterProducts.map((item, index) => (
            <ProductItem key={index}  name={item.name} id={item._id} price={item.price} image={item.image}/>
          )) }
        </div>
      </div>
    </div>
  )
}

export default Collection