'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "@/components/Navbar";
import { addToCart } from "@/redux/cartSlice";
export default function Home() {
  let [data, setData] = useState([]);
  const dispacth = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product', { cache: 'no-store' });
        const result = await response.json();
        setData(result);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const handleBuyProduct=async(product)=>{
    const res=await fetch('/api/user/order',{
      headers:{
        "Content-Type":"application/json",
        "Authorization":"bearer "+localStorage.getItem('token'),
      },
      method:'post',
      body:JSON.stringify(product),
    })
    const data=await res.json();
    console.log(data);
  }

  return (
    <div>
      <Navbar />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-2 place-items-center">
        {
          data.map((product, idx) =>
            <div key={idx} className="flex flex-col justify-center border rounded-md p-5 m-3" >
              <div className="flex justify-center rounded-md w-[300px] h-[300px] flex-grow">
                <Image src={`/product-images/${product.image}`} height={300} width={300} alt={product.name}/>
              </div>
              <div className="flex flex-col items-center text-lg font-bold text-blue-600">
                <h6>{product.name}</h6>
                <h6>{product.price}</h6>
                <h6>{product.category}</h6>
              </div>
              <div className="flex gap-5 justify-center text-white font-bold">
                <button onClick={() => dispacth(addToCart(product))} className="p-2 bg-blue-500 hover:bg-blue-950 rounded-md min-w-fit min-h-fit">Add to Cart</button>
              </div>
            </div>
          )}
      </div >
    </div>
  );
}