import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/payment/logo.png';

const Nabver = () => {
  return (
    <>  
    <div className='w-full bg-yellow-300 px-5 py-3 flex justify-between items-center'>
      <div className='w-44 h-auto'>
        <Link to="/"> 
        <img className='w-full h-full' src={logo}/>
        </Link>
      </div>
     
      <div className='w-1/3 h-8 flex text-black rounded-md overflow-hidden border-2 border-black'>< input className='w-full h-full  outline-none text-black px-2' type='search' placeholder='search heare'/>
      <button className='px-2 bg-zinc-900 text-white'> <i className="fa-solid fa-magnifying-glass"></i></button>
      
      </div>
      <div className='flex gap-2 font-serif'>
        {["home", "Sin in", "Sin Up"].map((item, index) => (
        <Link to={["/home", "/sinin", "/sinup"][index]}  key={index} className={`text-md capitalize font-light bg-zinc-900 py-1 px-4 rounded-xl ${index===1 && "ml-32"}`}>{item}</Link>
     ))}
    
      </div>
      
    </div>
     <Outlet/>
     </>
  )
}

export default Nabver
