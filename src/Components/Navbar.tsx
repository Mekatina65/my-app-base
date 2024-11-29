'use client'
import { useState } from "react"

const Navbar = () => {
    const  [isActice, setIsActibe] = useState(false)
  return (
    <nav className="bg-blue-300 py-4">
        <div className="flex justify-between text-white px-6 md:px-20 items-center">
            <div>
                <p className="text-2xl font-bold">T W E</p>
            </div>
            <div className="space-x-4 items-center justify-center hidden md:block">
                <a href=""className="hover:bg-teal-300 py-2 px-4">home</a>
                <a href=""className="hover:bg-teal-300 py-2 px-4">home</a>
                <a href=""className="hover:bg-teal-300 py-2 px-4">home</a>
                <a href=""className="hover:bg-teal-300 py-2 px-4">home</a>               
            </div>
           <p className={`${isActice ? "hidden" : "block"}md:hidden`}
           onClick={() => setIsActibe(true)}>III</p>
           <p className={`${isActice ? "block" : "hidden"}md:hidden`}
           onClick={() => setIsActibe(false)}>X</p>
           
        </div>

    </nav>
        
  )
}

export default Navbar
