import React, { use, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = use(ShopContext);
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = [...products];

      // Filter by category (if provided)
      if (category) {
        productsCopy = productsCopy.filter(
          (item) => item.category === category
        );
      }

      // Filter by subcategory (if provided)
      if (subCategory) {
        productsCopy = productsCopy.filter(
          (item) => item.subCategory === subCategory
        );
      }

      // Limit to 5
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]); // Add category & subCategory dependencies

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"}></Title>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          ></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
