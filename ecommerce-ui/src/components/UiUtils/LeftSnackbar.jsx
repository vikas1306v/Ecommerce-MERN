import React from 'react'
import { Alert, Slide, Snackbar } from '@mui/material';


function TransitionLeft(props) {
    return <Slide {...props} direction="right" />;
  }
const LeftSnackbar = (props) => {
    const {open,setOpen,message,bodyToShow}=props
  return (
    <>
     <React.Fragment>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message="Signed in successfully"
        TransitionComponent={TransitionLeft}
        onClose={(event, reason) => {
          setOpen(false);
         
        }}
      >
        <Alert onClose={()=>setOpen(false)} severity={message} sx={{ width: '100%' }}>
    {bodyToShow}
  </Alert>
      </Snackbar>
     
    </React.Fragment></>
  )
}

export default LeftSnackbar