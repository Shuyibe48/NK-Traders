import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center font-bold text-xl">
        {/* <p className="bg-secondary text-white px-1 border-2 border-black border-r-0">
          NK
        </p>
        <p className="border-2 border-black px-1 border-l-0">
          Traders<span className="text-secondary">.</span>
        </p> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FNBGIRCYt6m070tIYzvnzwK-Cutu3YvCLg&s" alt="logo" width={40} height={40} />
      </div>
    </Link>
  );
};

export default Logo;
