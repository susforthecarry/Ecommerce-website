import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import Loading from '../Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { getCart, cart, UpdateProduct, DeleteProduct, ClearProducts } = useContext(CartContext);

  useEffect(() => {
    async function fetchCart() {
      try {
        await getCart();
      } catch (error) {
        console.error('Error fetching cart:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCart();
  }, [getCart]);

 

  return (
    <>
   
      {loading ? (
        <Loading />
      ) : (
        <div className='m-0 p-0 sm:h-fit flex justify-center items-center '>
          {!cart || cart.data.products.length === 0 ? (
             <div className='flex items-center justify-center h-screen'>
              <p className='mx-4'>Cart Is Now Empty</p>
              <i class="fa-solid fa-triangle-exclamation fa-bounce text-red-600">  </i>
         
         
             </div>

          ) : (
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
                    {cart.data.products.map((product) => (
                      <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4">
                          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {product.product.title}
                        </td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button 
                              onClick={() => UpdateProduct(product.product.id, product.count - 1)} 
                              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
                              type="button"
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                              </svg>
                            </button>
                            <div>
                              <span>{product.count}</span>
                            </div>
                            <button 
                              onClick={() => UpdateProduct(product.product.id, product.count + 1)} 
                              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
                              type="button"
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {product.price} EGP
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            className="font-medium text-red-600 dark:text-red-500 hover:underline" 
                            onClick={() => DeleteProduct(product.product.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4} className='text-l font-semibold my-3'>Total Price</td>
                      <td className='text-l font-semibold'>{cart.data.totalCartPrice} EGP</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <button 
                onClick={ClearProducts} 
                type="button" 
                className="my-8 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Clear Items
              </button>
              <Link 
                to='/checkout' 
                className="my-8 focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Check Out
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}
