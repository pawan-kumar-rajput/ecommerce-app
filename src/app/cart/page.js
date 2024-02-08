'use client'
import Navbar from "@/components/Navbar";
import {removeFromCart, decrementQuantity, incrementQuantity } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const amount=useSelector((state)=>state.cart.amount);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="font-bold mt-5">{`Total Amount Rs. ${amount}`}</h3>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-900 p-2 rounded-md font-bold text-white">Buy Now</button>
          </div>
          <div>
            <table className="lg:w-[50vw] md:w-[70vw]">
              <thead>
                <tr className="bg-gray-400">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Price</th>
                  <th className="p-2 text-left">Quantity</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((product, idx) =>
                    <tr className="bg-blue-100" key={idx}>
                      <td className="p-2 text-left">{product.name}</td>
                      <td className="p-2 text-left">{product.price}</td>
                      <td className="p-2 text-left">
                        <button onClick={() => dispatch(incrementQuantity(product))} className="bg-blue-500 hover:bg-blue-900 text-white font-bold p-2 w-5 rounded-md">+</button>
                        <input type="text" value={product.quantity} className="focus:outline-none rounded-md p-2 text-center w-10" readOnly />
                        <button onClick={() =>dispatch(decrementQuantity(product))} className="bg-blue-500 hover:bg-blue-900 text-white font-bold p-2 w-5 rounded-md">-</button>
                      </td>
                      <td className="p-2 text-left">
                        <button onClick={() => dispatch(removeFromCart(product))} className="bg-red-500 hover:bg-red-700 p-2 rounded-md font-bold text-white">Remove</button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart