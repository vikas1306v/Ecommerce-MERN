import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setProduct} from '../Redux/Slices/Product'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data=useSelector((state)=>state.user)
  const setbyCategoryName=async(e)=>{
    const res=await fetch(`/api/v1/product/getByCategoryName/${e}`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }
  
    })
    const response=await res.json()
    console.log(response)
    dispatch(setProduct(response.products))
    navigate('/productslandingpage')

  }
  return (
    <>
  
<div class="flex justify-center items-center mt-8">
 
  <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
    <div class="flex flex-col jusitfy-center items-center space-y-10">
      <div class="flex flex-col justify-center items-center ">
        <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
      </div>
    {/* women */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-8 w-full">
        <div class="relative group flex justify-center items-center h-full w-full">
          <img class="object-center object-cover h-full w-full" src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="girl-image" />
          <button  onClick={()=>setbyCategoryName("women")} class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
          <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>

        <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
          <div class="relative group flex justify-center items-center h-full w-full">
            <img class="object-center object-cover h-full w-full" src="https://images.unsplash.com/photo-1524289286702-f07229da36f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3Ryb25pYyUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="shoe-image" />
            <button  onClick={()=>setbyCategoryName("electronics")} class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Electronics</button>
            <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
          <div class="relative group flex justify-center items-center h-full w-full">
            <img class="object-center object-cover h-full w-full" src="https://media.istockphoto.com/id/626085868/photo/mens-accessories.webp?b=1&s=170667a&w=0&k=20&c=EHt5OBGhlIr7X1Yo24B9GQHI-BSg2Y_xtzB_rz4ZIGo=" alt="watch-image" />
            <button  onClick={()=>setbyCategoryName("men")}  class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">MENS</button>
            <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
        </div>

        <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
          <img class="object-center object-cover h-full w-full" src="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" alt="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" />
          <button  onClick={()=>setbyCategoryName("grocery")}  class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">GROCERY</button>
          <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
        <div class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
          <img class="object-center object-cover h-full w-full hidden md:block" src="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" alt="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" />
          <img class="object-center object-cover h-full w-full md:hidden" src="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" alt="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" />
          <button  onClick={()=>setbyCategoryName("grocery")}  class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">GRCOERY</button>
          <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
        </div>
      </div>
      <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
        <img class="object-center object-cover h-full w-full hidden md:block" src="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" alt="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" />
        <img class="object-center object-cover h-full w-full sm:hidden" src="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" alt="https://wallpapers.com/images/high/aisle-in-a-korean-supermarket-gqkwjsr15cmt4dua.webp" />
        <button onClick={()=>setbyCategoryName("grocery")} class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">GROCERY</button>
        <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Category