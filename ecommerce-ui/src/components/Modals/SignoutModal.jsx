import React from 'react'
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { Button, Modal } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import {logout} from '../../Redux/Slices/Userslice'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom';

const SignoutModal = (props) => {
  const alert = useAlert()
  const navigate = useNavigate()
  
    const {openModal,setOpenModal}=props
    const dispatch=useDispatch()
    const logoutuser=()=>{
      alert.success('Logout Successfully')
        dispatch(logout())  
        navigate('/') 
    }
   
  return (
   <>
      <Modal  show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want Signout
            </h3>
            <div className="flex justify-center gap-4">
              <Button className='bg-red-900'     onClick={() =>{ logoutuser(),setOpenModal(false)}}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
   </>
  )
}

export default SignoutModal