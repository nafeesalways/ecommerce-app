import React, { use, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = use(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType] =useState('relevant');
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    // Filter by category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Filter by subcategory (type)
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

const sortProduct = ()=>{
    let fpCopy = filterProducts.slice();
    switch (sortType){
        case 'low-high':
            setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
            break;

            case 'high-low':
            setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
            break;
            
            default:
                applyFilter();
                break;
    }
}


useEffect(()=>{
    sortProduct()
},[sortType])

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-10 pt-10 border-t">
      {/* Sidebar Filters */}
      <div className="min-w-[150px] sm:min-w-[200px]">
        {/* Filters Header */}
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl font-semibold flex items-center justify-between sm:justify-start cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 transition-transform duration-200 sm:hidden ${
              showFilter ? "rotate-90" : ""
            }`}
            alt="dropdown icon"
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 rounded-md transition-all duration-300 ease-in-out ${
            showFilter
              ? "max-h-[300px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden sm:max-h-none sm:opacity-100"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value="Men"
              />{" "}
              Men
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value="Women"
              />{" "}
              Women
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                onChange={toggleCategory}
                value="Kids"
              />{" "}
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-5 rounded-md transition-all duration-300 ease-in-out ${
            showFilter
              ? "max-h-[300px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden sm:max-h-none sm:opacity-100"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Topwear"
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </label>
          </div>
        </div>
      </div>
      {/* Right Part */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"}></Title>
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            ></ProductItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
