import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.modules.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import CounterContextProvider from './Context/CounterContext.jsx'
import UserContextProvider from './Context/UserContext.jsx'
import CartContextProvider from './Context/CartContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import { Toaster } from 'react-hot-toast'
import AllOrders from './Components/AllOrders/AllOrders.jsx'
import CheckOut from './Components/CheckOut/CheckOut.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Wishlist from './Components/Wishlist/Wishlist.jsx'
import WishlistContextProvider from './Context/WishlistContext.jsx'

let routers = createBrowserRouter([
  {path: '' , element: <Layout/>, children :[
    {path:'home' , element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'wishlist' , element:<ProtectedRoute><Wishlist/></ProtectedRoute>}, 	

    {path:'allorders' , element:<ProtectedRoute><AllOrders/></ProtectedRoute>},
    {path:'checkout' , element:<ProtectedRoute><CheckOut/></ProtectedRoute>},

    {path:'productDetails/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    

    {path:'login' , element:<Login/>},

    {index:true , element:<Register/>},
    {path:'*' , element:<Notfound/>},
  ]}
])

let query = new QueryClient();

function App() {

  return <WishlistContextProvider>
    <QueryClientProvider client={query}>
  <CartContextProvider>
  
  <UserContextProvider>
<CounterContextProvider>
<RouterProvider router={routers}></RouterProvider>
<Toaster/>

</CounterContextProvider>
</UserContextProvider>

</CartContextProvider>
</QueryClientProvider>
  </WishlistContextProvider>
  
  
 
}

export default App
