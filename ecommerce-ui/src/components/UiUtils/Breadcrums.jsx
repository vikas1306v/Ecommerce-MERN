import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';



export default function Breadcrums() {
  const location = useLocation();
  var pathnames = location.pathname.split('/');
  const [state,setState]=React.useState([{
    url:'/',


  },{
    url:'/productslandingpage'

  },{
    url:''

  }])
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to='/'>
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          to=''
        >
         Products
        </Link>
        <Typography color="text.primary">Shop</Typography>
       
      </Breadcrumbs>
    </div>
  );
}
