'use client'
import { setLoginStatus } from "@/redux/loginSlice"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
const Navbar = () => {
  const [visibility, setvisivility] = useState('invisible');
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const cart = useSelector((state) => state.cart.items);
  useEffect(() => {
    console.log("navbar rendering");
    if (localStorage.getItem('token')) {
      dispatch(setLoginStatus({ status: true }));
    }
    else {
      dispatch(setLoginStatus({ status: false }));
    }
  }, [dispatch]);

  const handleVisibility = () => {
    if (visibility === 'visible') setvisivility('invisible');
    else setvisivility('visible');
  }
  const logout = () => {
    localStorage.removeItem('token');
    dispatch(setLoginStatus({ status: false }));
  }
  return (
    <div className="sticky top-0 flex items-center justify-between px-12 h-16 bg-blue-500 text-white font-bold ">
      <div>
        <Link className="text-xl font-bold" href="/">Ecommerce</Link>
      </div>
      <div className={`${visibility} bg-blue-500 lg:visible absolute lg:static top-10 left-0 w-full flex flex-col lg:flex-row gap-2 lg:gap-10  items-center lg:justify-between py-1`}>
        <div className="flex flex-col items-center lg:flex-row gap-2 lg:gap-10 lg:mx-auto">
          <Link className="p-2 hover:bg-blue-900 rounded-md" href="/">Home</Link>
          <Link className="p-2 hover:bg-blue-900 rounded-md" href="/cart">
            <span>Cart</span>
            <span className="bg-red-500 rounded-full p-1">{cart.length}</span>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-10">
          {
            login
              ? <button className="p-2 hover:bg-blue-900 rounded-md" onClick={logout}>Logout</button>
              : <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-10">
                <Link className="p-2 hover:bg-blue-900 rounded-md" href={"/login"}>Login</Link>
                <Link className="p-2 hover:bg-blue-900 rounded-md" href={"/register"}>Register</Link>
              </div>
          }

        </div>
      </div>
      <div>
        <IoMdMenu fontSize={30} onClick={() => handleVisibility()} className="lg:hidden" />
      </div>
    </div>
  )
}

export default Navbar;