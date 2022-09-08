import React from 'react'

export default function Footer({inCompleteStatus}) {
  const handleStatusChange =()=>{

  }
  const handleColorChange =()=>{

  }
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{inCompleteStatus} left</p>
        <ul className="flex space-x-1 items-center text-xs">
            <li className="cursor-pointer font-bold" onClick={() => handleStatusChange("All")}>All</li>
            <li>|</li>
            <li className="cursor-pointer" onClick={() => handleStatusChange("Incomplete")}>Incomplete</li>
            <li>|</li>
            <li className="cursor-pointer" onClick={() => handleStatusChange("Complete")}>Complete</li>
            <li></li>
            <li></li>
            <li onClick={() => handleColorChange("green")}
                className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
            ></li>
            <li onClick={() => handleColorChange("red")}
                className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
            ></li>
            <li onClick={() => handleColorChange("yellow")}
                className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
            ></li>
        </ul>
    </div>
  )
}
