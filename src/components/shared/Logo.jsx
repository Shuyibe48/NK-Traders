import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center font-bold text-xl">
        <p className="bg-secondary text-white px-1 border-2 border-black border-r-0">
          NK
        </p>
        <p className="border-2 border-black px-1 border-l-0">
          Traders<span className="text-secondary">.</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
