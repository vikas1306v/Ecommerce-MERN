import React, { useEffect, useState } from "react";
import ProductCard from "../components/Product/ProductCard";

const ProductList = (props) => {
const {bestThings}=props
  
  const {headingName}=props
  return (
    <>
      <div class="bg-white" style={{height:'520px'}}  >
       <div class="mx-auto max-w-2xl  sm:px-3 sm:py-20 lg:max-w-7xl lg:px-6 mb-6" >
          <h2 class="mb-4 text-2xl font-bold tracking-tight text-gray-900" >
           {headingName}
          </h2>
          <div class="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 " >
            {
             bestThings.length>0? bestThings.map((item)=>{return <ProductCard images={item.images} title={item.title} item={item} />}):null
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
