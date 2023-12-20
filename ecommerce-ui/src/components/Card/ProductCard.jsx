import React from 'react'
import { Link } from 'react-router-dom'

const   ProductCard = (props) => {
  const {images,title,item}=props 

  
  return (
   <>
    <div class="group relative transition duration-500  hover:scale-105  cursor-pointer" >
    <Link to={`/singleproduct` } state={item}>  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={images[0].url || "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"}
                  alt="Front of men&#039;s Basic Tee in black."
                  class="h-full w-full p-3 object-cover object-center lg:h-full lg:w-full"
                />
               
              </div>
              <div  className='flex  justify-center'>
                <h1  className='text-xl  text-slate-500'>{title}</h1>
              </div>
         
              
                
               
                 
                    
                    </Link>
                
             
            </div>
   </>
  )
}

export default ProductCard