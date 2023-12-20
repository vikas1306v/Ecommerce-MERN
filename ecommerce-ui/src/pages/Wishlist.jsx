// Wishlist.js

import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addwishlist } from '../Redux/Slices/wishlistSlice';
import { Link } from 'react-router-dom';


const Wishlist = () => {

  const dispatch=useDispatch()
  const user=useSelector(state=>state.user)
  const wishlist=useSelector(state=>state.wishlist)

  const addToCart=(id)=>{ 
    console.log(id)
  }


  

  const removeFromWishlist=async(id)=>{
    const response=await fetch("/api/v1/auth/wishlist",{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
        'auth-token':user.token
      },
      body:JSON.stringify({product_id:id})
    })
    const data=await response.json()

    if(data.success===true){
      dispatch(addwishlist(data.wishlist))
      return;
    }
    

  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">{wishlist.wishlist.length === 0 ?null:<p>Your Wishlist</p>}</h1>
      {wishlist.wishlist.length === 0 ? (

        <div className='flex justify-center p-9'>
                
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
    <h1 class="text-2xl font-bold mb-4">Your Wishlist</h1>
    <p class="text-gray-600">Your wishlist is currently empty. Add some items you love!</p>

    <div class="mt-8 flex justify-center">
        <Link to='/productslandingpage' class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Explore Products</Link>
    </div>
</div>
        </div>
  
        
        
   
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
          {wishlist.wishlist.map(item => (
            <li  className="border p-4 rounded-md shadow-md">
              <div className="flex flex-col items-center">
                <img
                  src={item.images[0].url}
                  alt={item.brnad}
                  className="mb-2 rounded-md"
                  style={{ maxWidth: '100%', maxHeight: '150px' }}
                />
                <p className="text-lg font-semibold">{item.brand}</p>
              </div>
              <div  className='flex  mt-4'>
               
          <button  onClick={()=>addToCart(item._id)}  type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none  mx-9  p-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to cart
          </button>
          <button  onClick={()=>removeFromWishlist(item._id)}  type="button" class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-red-900 bg-none p-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-red-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Remove FW
          </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
