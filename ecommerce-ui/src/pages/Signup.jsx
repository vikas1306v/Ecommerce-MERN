import React from 'react'
import { json } from 'react-router-dom';
import LeftSnackbar from '../components/UiUtils/LeftSnackbar';

const Signup = () => {
    const [data,setData]=React.useState({
    });
   
    const [open,setOpen]=React.useState(false);
    const [bodyToShow,setBodyToShow]=React.useState('');
    const style={
        width:'50%',   
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
       const res= await fetch('/api/v1/auth/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const result=await res.json();
        if(result.success===true){
            setBodyToShow(result.message);
            setOpen(true);
        }
        else{
            setBodyToShow(result.message);
            setOpen(true);
        }
        setData({
            firstname:'',
            lastname:'',
            email:'',
            mobileNumber:'',
            password:''
        });

    }
  return (
   <>

<div class="bg-grey-lighter min-h-screen flex flex-col" >
            <div class="container  mx-auto flex-1 flex flex-col items-center justify-center p-8" style={style}>
                <div class="bg-white p-5 rounded shadow-md text-black w-full ">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <form  onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        autoComplete='off'
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="firstname"
                        placeholder="First Name" 
                        value={data.firstname}
                        onChange={(e)=>setData({
                            ...data,
                            [e.target.name]:e.target.value
                        
                        })}/>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="lastname"
                        autoComplete='off'
                        value={data.lastname}
                        placeholder="Last Name " 
                        onChange={(e)=>setData({
                            ...data,
                           [e.target.name]:e.target.value
                        })}/>

                    <input 
                        type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        autoComplete='off'
                        placeholder="Email" 
                        value={data.email}
                        onChange={(e)=>setData({
                            ...data,
                            [e.target.name]:e.target.value
                        })}/>
                    <input 
                        type="number"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="mobileNumber"
                        autoComplete='off'
                        placeholder="Phone Number"
                        value={data.mobileNumber}
                        onChange={(e)=>setData({
                            ...data,
                            [e.target.name]:e.target.value
                        })} />

                    <input 
                        type="password"
                        autoComplete='off'
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e)=>setData({
                            ...data,
                            [e.target.name]:e.target.value
                        })}  />
               

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                    </form>

                    <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
        <LeftSnackbar  open={open} setOpen={setOpen} bodyToShow={bodyToShow}  message="success"/>
   </>
  )
}

export default Signup