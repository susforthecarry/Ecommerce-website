import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// Create the Cart context
export let CartContext = createContext();

export default function CartContextProvider({ children }) {
  // Define headers with the token
  let headers = {
    token : localStorage.getItem(`userToken`)
  };

  const [cart, setCart] = useState(null);

  // Fetch the cart data when the component mounts
  useEffect(() => {
    getCart();
  }, []);

  // Function to add a product to the cart
  async function AddProduct(Id) {
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: Id },
        { headers }
      );
      toast.success("Product added successfully", { duration: 500 });
      setCart(data);
    } catch (error) {
      toast.error("This is an error!");
    }
  }

  // Function to fetch the cart data
  async function getCart() {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers }
      );
      console.log(data);
      setCart(data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }

  // Function to update the quantity of a product in the cart
  async function UpdateProduct(Id, count) {
    if (count > 0) {
      try {
        const { data } = await axios.put(
          `https://ecommerce.routemisr.com/api/v1/cart/${Id}`,
          { count },
          { headers }
        );
        toast.success("Product updated successfully", { duration: 500 });
        setCart(data);
      } catch (error) {
        console.error(error);
        toast.error("This is an error!");
      }
    } else {
      toast.error("You cannot have an item with 0 quantity. Please try again!");
    }
  }

  // Function to delete a product from the cart
  async function DeleteProduct(Id) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${Id}`,
        { headers }
      );
      toast.success("Product deleted successfully", { duration: 500 });
      setCart(data);
    } catch (error) {
      console.error(error);
      toast.error("This is an error in delete. Please try again!");
    }
  }

  // Function to clear the cart
  async function ClearProducts() {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers }
      );
      toast.success("Cart is now cleared", { duration: 1500 });
      setCart(null); // Set the cleared cart
    } catch (error) {
      console.error('Clear action failed:', error);
    }
  }

  // Function to handle the checkout process
  async function checkout(shippingAddress) {
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`,
        shippingAddress,
        { headers }
      );
      console.log(data);
      window.location.href = data.session.url;
    } catch (error) {
      toast.error("This is an error!");
    }
  }

  return (
    <CartContext.Provider
      value={{ AddProduct, setCart, cart, getCart, UpdateProduct, DeleteProduct, ClearProducts, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
}
