import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { createContext , useState} from "react";
import toast from 'react-hot-toast';
import { CartContext } from './CartContext';



export let wishlistContext = createContext();



export default function WishlistContextProvider(props) {


  

    let headers = {
        token : localStorage.getItem(`userToken`)
      };
      const [wishlist, setWishlist] = useState([])


    async function AddWishlist(Id) {
        try {
          const { data } = await axios.post(
            `https://ecommerce.routemisr.com/api/v1/wishlist`,
            { productId: Id },
            { headers }
          );
          setWishlist(data.data);

          toast.success("Product  added to Wishlist successfully", { duration: 500 });
        } catch (error) {
          toast.error("This is an error in Process for adding this product to wishlist Try Again!");
        }
      }
     


      async function getWishlist() {
        try {
          const { data } = await axios.get(
            `https://ecommerce.routemisr.com/api/v1/wishlist`,
            { headers }
          );
          setWishlist(data.data);
          
          
          
        } catch (error) {
          console.error("Error fetching wishlist data:", error);
        }
      }

      useEffect(()=>{
        getWishlist();
      })
      async function DeleteWishlistProduct(Id) {
        try {
          const { data } = await axios.delete(
            `https://ecommerce.routemisr.com/api/v1/wishlist/${Id}`,
            { headers }
          );
          toast.success("Wishlist Product deleted successfully", { duration: 500 });
          setWishlist(data.data);
        } catch (error) {
          console.error(error);
          toast.error("This is an error in delete. Please try again!");
        }
      }


  return <wishlistContext.Provider value={{setWishlist , wishlist , getWishlist , AddWishlist ,DeleteWishlistProduct }}>
    {props.children}

  </wishlistContext.Provider>
}
