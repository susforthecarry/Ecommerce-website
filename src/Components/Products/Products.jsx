import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import QuantityLogo from '../../assets/images/boxes.png';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CartContext } from '../../Context/CartContext';

export default function Products() {
  const { AddProduct } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  async function getProducts() {
    try {
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
      setProducts(data.data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (<>
  <form className="max-w-md mx-auto my-3">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
    </div>
  </form>
  <div className="flex flex-wrap justify-center items-center w-1/2 mx-auto">
      


      {products.length ? (
        products.map((product) => (
          <article key={`${product.id}-${product.title}`} className="w-full sm:w-1/2 md:w-1/4 mx-auto product border-2 border-transparent hover:border-green-400 border-solid cursor-pointer">
            <Link to={`/productDetails/${product.id}`}>
              <div className="m-2">
                <img src={product.imageCover} alt="" className="w-full rounded-2xl" />
                <h1 className="p-2 font-bold text-lg">{product.title.split(' ').slice(0, 3).join(' ')}</h1>
                <p className="text-green-600">{product.category.name}</p>
                <p className="text-start text-red-400">
                  <i className="fa-solid fa-money-bill pr-4 ps-2 text-green-500" />
                  {product.price}
                </p>
                <div className="md:flex justify-between items-center">
                  <p className="text-start text-red-400 flex items-center">
                    <img src={QuantityLogo} alt="" className="w-11 ps-2 pr-4" />
                    {product.quantity}
                  </p>
                  <p>
                    <i className="fa-solid fa-star text-yellow-400">{product.ratingsAverage}</i>
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex justify-center">
              <button
                className="btn bg-green-500 rounded-lg w-1/2 text-white py-3"
                onClick={() => {
                  AddProduct(product.id);
                }}
              >
                Add To Cart
              </button>
            </div>
          </article>
        ))
      ) : (
        <Loading />
      )}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  </>
    
    
  );
}