
import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import Contact from './pages/Contact'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SingleProduct from './components/SingleProduct'
import FilterProduct from './components/Product/FilterProduct'
import CartPage from './components/CartPage'
import CheckOutPage from './pages/CheckOutPage'
import ErrorPage from './pages/ErrorPage'
import ArticlePage from './pages/ArticlePage'
import Category from './pages/Category'
import Wishlist from './pages/Wishlist'
import UserProfile from './pages/UserProfile'
import NotificationsPage from './pages/HomeUserNotification'

function App() {


  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
     
        <Route path='/contact' element={<Contact/>}/>
      
  
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/singleproduct' element={<SingleProduct/>}/>
        <Route path='/productslandingpage'element={<FilterProduct/>}/>
        <Route path='/wishlist'element={<Wishlist  />}/>
        <Route path='/cartpage' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckOutPage/>}/>
        <Route path='/article' element={<ArticlePage/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/notification' element={<NotificationsPage/>}/>
        <Route path='/categorieslandingpage' element={<Category/>}/>
        <Route path='*' element={<ErrorPage/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    
    </>
  )
}

export default App
