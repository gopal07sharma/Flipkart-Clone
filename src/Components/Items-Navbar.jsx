import React from "react";

export const Items_Navbar = () => {
  return (
    <div>

     <nav className=" mx-4 mt-4 mb-2 bg-white">
        <ul className='flex flex-wrap justify-around  h-auto md:h-28 w-full font-semibold '>
            <li className="flex flex-col items-center md:items-start">
                <img src="./src/assets/grocery.png" alt="" className="max-h-16 max-w-full h-auto w-auto" />
                <span className="mt-2 md:mt-0">Grocery</span>
            </li>
            <li className="flex flex-col items-center md:items-start">
                <img src="./src/assets/Mobiles.png" alt="" className="max-h-16 max-w-full h-auto w-auto" />
                <span className="mt-2 md:mt-0">Mobiles</span>
            </li>
            <li className="flex flex-col items-center md:items-start">
                <img src="./src/assets/fashion.jpeg" alt="" className="max-h-16 max-w-full h-auto w-auto" />
                <span className="mt-2 md:mt-0">Fashion</span>
            </li>
            <li className="flex flex-col items-center md:items-start">
                <img src="./src/assets/electronics.jpeg" alt="" className="max-h-16 max-w-full h-auto w-auto" />
                <span className="mt-2 md:mt-0">Electronics</span>
            </li>
            <li className="flex flex-col items-center md:items-start">
                <img src="./src/assets/travel.jpeg" alt="" className="max-h-16 max-w-full h-auto w-auto" />
                <span className="mt-2 md:mt-0">Travel</span>
            </li>
        </ul>
    </nav>
</div>


  );
};
