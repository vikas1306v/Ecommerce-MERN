import React from 'react'
import { Carousel } from 'flowbite-react';

const Crousal = () => {
   
  return (
    <>

<div  className='hidden sm:block'>
<div className=" sm:h-64 xl:h-80 2xl:h-96 ml-5 mr-5 " >
      <Carousel pauseOnHover slideInterval={2000}  >
        <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4995be28f180a90c.jpg?q=20'></img>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/587f861a5914fd00.jpg?q=20" alt="..." />
        <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20'></img>
      </Carousel>
    </div> 
</div>
    </>
  )
}

export default Crousal