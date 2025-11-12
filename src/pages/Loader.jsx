import React from 'react'
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
 
     <div className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 `}>
      <div className="animate-spin-twice-pause">
         <ClipLoader color="#3F62FF" size={60} />
      </div>
    </div>
  )
}

export default Loader
