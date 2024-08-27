import React, { useContext , useEffect, useState } from 'react'
import { wishlistContext } from '../../Context/WishlistContext'
import Loading from '../Loading/Loading';
import { CartContext } from '../../Context/CartContext';

export default function Wishlist() {
    const [loading, setLoading] = useState(true);

    let {wishlist  , getWishlist  , DeleteWishlistProduct} =   useContext(wishlistContext)
    let {  AddProduct} = useContext(CartContext);

    useEffect(()=>{
        getWishlist();

    })
  return <>
      <div className='h-fit m-3 flex justify-center items-center'>
          {!wishlist ?(
            <h2>wishlist is Empty</h2>
          ) : 
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:flex-col">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-16 py-3">
                        <span className="sr-only">Image</span>
                      </th>
                      <th scope="col" className="px-6 py-3">Product</th>
                      <th scope="col" className="px-6 py-3">Qty</th>
                      <th scope="col" className="px-6 py-3">Price</th>
                      <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.map((product) => (
                      <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4">
                          <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.title} />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {product.title}
                          <div className='flex flex-wrap h-fit '>
                          <button className='w-[100px] me-0 pe-0 rounded-xl md: bg-green-500 md:cursor-pointer  md:rounded-lg md:w-1/2 text-white md:py-3 md:mt-2 ' onClick={()=>{
                            AddProduct(product._id);
                          }}> Add To Cart </button>
                          </div>
                  
                        </td>
                        
                        <td className="py-4">
                        
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          <div>
                              {product.price} EGP
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            className="font-medium text-red-600 dark:text-red-500 hover:underline" 
                            onClick={() => DeleteWishlistProduct(product.id)}
                          >
                            Remove
                          </button>
                         
                        </td>
                        
                      </tr>
                      
                    ))}
                  </tbody>
                  
                </table>
         

              </div>
           
              
            </div>
          }
        </div>
    

  </>
}
