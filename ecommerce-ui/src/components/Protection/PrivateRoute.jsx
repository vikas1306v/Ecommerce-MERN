import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = () =>{
    const data=useSelector((state)=>state.user);

    return data.token? <Outlet/>:<Navigate to="/login"/>
}
export default PrivateRoute