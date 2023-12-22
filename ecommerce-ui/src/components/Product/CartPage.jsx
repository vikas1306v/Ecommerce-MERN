import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {addToCart} from '../../Redux/Slices/cartSlice'
import { useAlert } from 'react-alert'
const CartPage = () => {
  const navigate = useNavigate()
  const alert = useAlert()
  const dispatch=useDispatch()
  const cart=useSelector(state=>state.cart)
  const user=useSelector(state=>state.user)

  const checkOutPage = () => {
    navigate('/checkout')
  }
  const removeFromCart=async(id)=>{

    const res=await fetch(`/api/v1/cart/delete/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
         'auth-token':user.token
      },
    })
    const data=await res.json()
    if(data.success==true){
      alert.success('Item removed from cart')
    dispatch(addToCart(data))
    return

  }
  else{
    alert.error('Something went wrong')
  }

   
  }
  return (
    <>
  <div class="  pt-16">
    {cart.cart.length>0?<h1 class="mb-10 text-center  text-2xl font-bold">Cart Items</h1>:null
    }
    {
      cart.cart.length>0?<div class="mx-auto max-w-5xl  justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
      <div class="rounded-lg md:w-2/3">
        
        {
          cart.cart.length>0?cart.cart.map((item)=>{
            return (
              <div class="justify-between mb-6 border-[1px] rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img src={item.images[0].url} alt="product-image" class="w-full rounded-lg sm:w-40" />
              <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div class="mt-5 sm:mt-0">
                  <h2 class="text-lg font-bold text-gray-900">{item.brand}</h2>
                  <p class="mt-1 text-xs text-gray-700">{item.description}</p>
                </div>
                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div class="flex items-center border-gray-100">
                    <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                    <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="1" min="1" />
                    <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                  </div>
                  <div class="flex items-center space-x-4">
                    <p class="text-sm">{item.price} $</p>
                  <button  onClick={()=>removeFromCart(item._id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  </div>
                </div>
              </div>
            </div>
            )
          }):null
        }
      
      
    
       
        
      </div>
     
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">$ {
            cart.cartTotal
          }</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">{cart.cartTotal+4.99} USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button onClick={checkOutPage}class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div>:
      <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <button onClick={()=>navigate('/productslandingpage')} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Shop Now
        </button>
      </div>
    </div>
    }
  </div>

    </>
  )
}

export default CartPage