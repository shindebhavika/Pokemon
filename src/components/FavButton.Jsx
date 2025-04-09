import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function FavButton() {
 const wishlist = useSelector((state) => state.Cars.wishlist);
  return (
     <div className="w-full flex justify-end md:justify-start">
           <Link to="/my-fav">
             <button className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md font-semibold tracking-wide shadow hover:bg-red-600 dark:hover:bg-red-400 transition duration-300 relative">
               My Favorites
               <svg
                 className="w-5 h-5"
                 stroke="currentColor"
                 strokeWidth="1.5"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                   strokeLinejoin="round"
                   strokeLinecap="round"
                 ></path>
               </svg>
               <span className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center bg-red-300 text-black rounded-full">
                 {wishlist.length}
               </span>
             </button>
           </Link>
         </div>
  )
}

export default FavButton
