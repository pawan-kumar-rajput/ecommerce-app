'use client'
import Navbar from "@/components/Navbar";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/user/register', {
      method: 'POST',
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);
  }
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center m-10">
          <div className="border rounded-lg pb-1 font-bold w-[60vw]">
            <h1 className="text-center p-2 bg-blue-500 border rounded-lg">User Registration</h1>
            <form onSubmit={handleSubmit} className="flex justify-center">
              <div className="border rounded-lg m-5 p-1 w-full">
                <div className="flex flex-col mt-5">
                  <label className="m-1" htmlFor="name">Name</label>
                  <input className="border rounded-md m-1 p-2" type="text" placeholder="Enter Your Name" id="name" name="name" required />
                  <label className="m-1" htmlFor="email">Email Address</label>
                  <input className="border rounded-md m-1 p-2" type="email" placeholder="Enter Email" id="email" name="email" required />
                  <label className="m-1" htmlFor="password">Password</label>
                  <input className="border rounded-md m-1 p-2" type="password" placeholder="Enter Password" id="password" name="password" required />
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-900 rounded-md w-48 p-2 m-2">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;