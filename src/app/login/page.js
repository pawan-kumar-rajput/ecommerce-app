'use client'

import Navbar from "@/components/Navbar";
import { setLoginStatus} from "@/redux/loginSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch=useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    if (data.status) {
      localStorage.setItem('token', data.token);
      dispatch(setLoginStatus({status:true}));
    }
  }
  return (
    <>
      <Navbar/>
      <div className="flex justify-center m-10">
        <div className="border rounded-lg pb-1 font-bold w-[60vw]">
          <h1 className="text-center p-2 bg-blue-500 border rounded-lg">User Login</h1>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <div className="border rounded-lg m-5 p-1 w-full">
              <div className="flex flex-col mt-5">
                <label className="m-1" htmlFor="email">Email Address</label>
                <input className="border rounded-md m-1 p-2" type="email" placeholder="Enter Email" id="email" name="email" />
                <label className="m-1" htmlFor="password">Password</label>
                <input className="border rounded-md m-1 p-2" type="password" placeholder="Enter Password" id="password" name="password" />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-900 rounded-md w-48 p-2 m-2">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;