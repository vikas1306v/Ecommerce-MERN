import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

const UserProfile = () => {
  const user=useSelector(state=>state.user);
  


  return (
    <div className="">
   
      {/* End of Navbar */}

      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.719695053.1702300690&semt=ais"
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user.name?user.name:"John"}</h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt
                repellendus ex?
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full md:w-9/12 md:mx-2">
            {/* Update Section */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="flex justify-between items-center">
                <h2 className="text-gray-900 font-bold text-lg leading-8">Update</h2>
                <button className="px-2 py-1 text-sm bg-blue-500 text-white rounded-full focus:outline-none">
                  See all
                </button>
              </div>
              <div className="mt-2">
                {/* Update Item */}
                <div className="flex justify-start items-start mt-2">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.719695053.1702300690&semt=ais"
                    alt=""
                  />
                  <div className="ml-2 w-3/4">
                    <p className="text-gray-900 text-sm leading-6">Jane Doe</p>
                    <p className="text-gray-600 text-xs leading-3">2 hours ago</p>
                  </div>
                </div>
                <p className="text-gray-800 text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, consequatur.</p>
              </div>
            </div>
            {/* Activities Section */}
            <div className="bg-white p-3 border-t-4 border-green-400 mt-4">
              <div className="flex justify-between items-center">
                <h2 className="text-gray-900 font-bold text-lg leading-8">Activities</h2>
                <button className="px-2 py-1 text-sm bg-blue-500 text-white rounded-full focus:outline-none">
                  See all
                </button>
              </div>
              <div className="mt-2">
                {/* Activity Item */}
                <div className="flex justify-start items-start mt-2">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.719695053.1702300690&semt=ais"
                    alt=""
                  />
                  <div className="ml-2 w-3/4">
                    <p className="text-gray-900 text-sm leading-6">Jane Doe</p>
                    <p className="text-gray-600 text-xs leading-3">2 hours ago</p>
                  </div>
                </div>
                <p className="text-gray-800 text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, consequatur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
