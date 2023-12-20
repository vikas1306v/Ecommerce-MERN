import React from "react";

import app from "../firebase";
import { getAuth } from "firebase/auth";
import {useDispatch} from 'react-redux'
import {addUser}  from '../Redux/Slices/Userslice'
import {useAlert }  from 'react-alert'
import {
  GoogleAuthProvider,
  signInWithPopup,
 
} from "firebase/auth";
import LeftSnackbar from "../components/UiUtils/LeftSnackbar";
import { useNavigate } from "react-router-dom";
import {addwishlist} from '../Redux/Slices/wishlistSlice'

import { addToCart } from "../Redux/Slices/Cartslice";
export default function Login() {
  const alert=useAlert()
  const navigate = useNavigate();
  const [data, setData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [bodyToShow, setBodyToShow] = React.useState("");
  const dispatch=useDispatch()
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const res=await fetch('/api/v1/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
  
   const response=await res.json()
  if(response.success===true){
  
   setOpen(true)
   setBodyToShow("Login Successfull")
    alert.success('Login Successfull')
   dispatch(addUser(response))
   dispatch(addwishlist(response.user.wishlist))
    dispatch(addToCart(response.user))
   navigate('/')}
    else{
      setOpen(true)
      setBodyToShow("Login Failed")
    }
  
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handlegoogleAuth = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto mt-5 sm:w-56 sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
            <span className="text-blue-600">Sign In </span>
            <span className="text-blue-800">To Your Account</span>
          </h2>
        </div>

        <div
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm"
        
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
           
              
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="email"
                  autoComplete="off"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                  autoComplete="off"
                  onChange={(e)=>handleChange(e)}
                />
              </div>
        

           

            <div>
              <button
                type="submit"
                className="flex  w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={handlegoogleAuth}
                className="flex mt-4 w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue with Google
              </button>

              {/* <button
                type="button"
                onClick={handleGithubAuth}
                className="flex mt-4 w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue with Github
              </button> */}
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </p>
        </div>
      </div>

     <LeftSnackbar  open={open} setOpen={setOpen} bodyToShow={bodyToShow}  message="success"/>
    </>
  );
}

