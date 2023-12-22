import React, { useEffect } from 'react'
import Crousal from '../components/Home/Crousal'
import ProductList from './ProductList'
import Winter from '../components/Home/Winter'
import Category from './Category.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {setProduct} from '../Redux/Slices/Product'
import ChatbotEmbed from '../components/UiUtils/ChatbotEmbed.jsx'
const Home = () => {

  const dispatch = useDispatch()
  const [newArrival, setNewArrival] = React.useState()
  const [bestPhones, setBestPhones] = React.useState([])
  const [bestGrocery,setBestGrocery]=React.useState([])
  const data=useSelector((state)=>state.user)
  const recommendations =async ()=>{
    const res=await fetch('/api/v1/recommendation/newuser',{
       method:'GET',
       headers:{
         'Content-Type':'application/json',
         'auth-token':data.token
       }
    })
     const data=await res.json()
     setNewArrival(data)
   }
   //get all products 
   const getProducts =async ()=>{
    const res=await fetch('/api/v1/product/all',
    {
       method:'GET',
       headers:{
         'Content-Type':'application/json',
       }
    })
     const response=await res.json()
     if(response.success===true){
      dispatch(setProduct(response.products))
      return
     }
  

   
   }
   //get top phones
   const getTOPPRODUCTS = async () => {
    const res = await fetch(`/api/v1/product/bestfives?categoryName=mobiles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const response = await res.json();
   
    setBestPhones(response.products)
    const res2=await fetch(`/api/v1/product/bestfives?categoryName=grocery`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const response2 = await res2.json();
    setBestGrocery(response2.products)
  }
  useEffect(() => {
    recommendations();
    getProducts();
    getTOPPRODUCTS();
  }, [])
  const ans = useSelector((state) => state.product);
 

 
  return (
    <>
    <div>
   

    </div>
    <Crousal/>
    <Winter/>
    <ProductList headingName={"BEST PHONES"} bestThings={bestPhones} />
    <ProductList headingName={"BEST SELLER"} bestThings={bestGrocery} />
    <Category/>
    <ChatbotEmbed/>

   
    </>
  )
}

export default Home