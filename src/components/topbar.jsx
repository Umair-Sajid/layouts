import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="bg-blue-500 row-span-1 col-span-12 p-4">
      {" "}
      {/* Added padding */}
      <ul className="flex space-x-4">
        {" "}
        {/* Added spacing between list items */}
        <li className="text-white font-bold">
          <Link to="/home">Home</Link>
        </li>
        <li className="text-white font-bold">
          <Link to="/about">About</Link>
        </li>
        <li className="text-white font-bold">
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
