// UserProfile.js
import React from 'react';

const UserProfile = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center">
          <img
            src="https://placekitten.com/100/100" // Replace with the user's profile picture
            alt="Profile"
            className="rounded-full h-16 w-16 mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1> {/* Replace with the user's name */}
            <p className="text-gray-600">Web Developer</p> {/* Replace with the user's occupation */}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Contact Information</h2>
          <ul>
            <li className="flex items-center mb-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4H8a4 4 0 0 1 0-8h8a4 4 0 0 1 0 8h-4zm0 0V21m0-2h0a2 2 0 0 1-2-2v-6m4 0v6a2 2 0 0 1-2 2h0"></path>
              </svg>
              johndoe@example.com
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A11 11 0 1 0 8 4.22a11 11 0 0 0 13 8.57v0zm0 0L21 12.79M21 12.79L13.1 20.7M21 12.79L14.9 4.9M12 2L2 12m0 0l10 10m-10-10h20"></path>
              </svg>
              (123) 456-7890
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
