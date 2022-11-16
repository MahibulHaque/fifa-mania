import Image from 'next/image'
import React from 'react'
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <nav className='w-[100vw] h-[100px] fixed bg-gradient-to-r from-sky-500 to-indigo-500 blur-b-md z-10 flex flex-row items-center justify-center'>
        <div className='max-w-[1000px] flex flex-row items-center justify-center h-full w-full p-8'>
            <ul className='list-none flex flex-row items-center justify-between w-full text-indigo-900 text-sm font-medium'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Teams</li>
                <li className='cursor-pointer'><Image src={logo} height={100} alt='logo
                '/></li>
                <li className='cursor-pointer'>World Cup</li>
                <li className='cursor-pointer'>About</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar