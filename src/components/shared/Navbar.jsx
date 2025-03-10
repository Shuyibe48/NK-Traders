import { AlignRight, Mail, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { BsEnvelope } from "react-icons/bs";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";

const navMenu = [
  { name: "car", link: "#", id: 1 },
  { name: "bike", link: "#", id: 2 },
  { name: "truck", link: "#", id: 3 },
  { name: "others", link: "#", id: 4 },
  { name: "blog", link: "#", id: 5 },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center text-xs py-1 sm:py-2 border-b">
          <div className="hidden sm:block">
            <div className="flex items-center gap-1 cursor-pointer">
              <Mail className="h-3 w-3" />
              <p>nk-traders@gmail.com</p>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <p>Follow Us</p>
              <div className="flex items-center gap-1">
                <CiFacebook className="h-4 w-4 cursor-pointer" />
                <CiInstagram className="h-4 w-4 cursor-pointer" />
                <BiLogoWhatsapp className="h-4 w-4 cursor-pointer" />
                <AiOutlineYoutube className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="text-[0.50rem] block sm:hidden">
            <div className="flex items-center gap-1 cursor-pointer">
              <Mail className="h-2 w-2" />
              <p>nk-traders@gmail.com</p>
            </div>
            <div className="flex items-center gap-1">
              <p>Follow Us</p>
              <div className="flex items-center gap-1">
                <CiFacebook className="h-3 w-3 cursor-pointer" />
                <CiInstagram className="h-3 w-3 cursor-pointer" />
                <BiLogoWhatsapp className="h-3 w-3 cursor-pointer" />
                <AiOutlineYoutube className="h-3 w-3 cursor-pointer" />
              </div>
            </div>
          </div>
          <button className="hover:bg-primary text-xs text-primary font-semibold hover:text-white border border-primary px-2 sm:px-4 py-1 duration-200 sm:hidden">
            <Link to="/login">Login</Link>
          </button>
        </div>

        <div className="flex justify-between items-center py-2 sm:py-3 relative w-full">
          {/* Small Screen (Mobile) Layout */}
          <div className="grid grid-cols-2 w-full justify-between items-center md:hidden">
            {/* Left: Logo */}
            <div className="flex items-center font-bold sm:text-xl">
              <p className="bg-secondary text-white px-1 py-[0.20rem] sm:py-0 border-2 border-black border-r-0">
                NK
              </p>
              <p className="border-2 border-black px-1 py-[0.20rem] sm:py-0 border-l-0">
                Traders<span className="text-secondary">.</span>
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 sm:gap-10">
              {/* Center: Button Section (Hidden on mobile) */}
              <div className="flex items-center gap-1">
                <button className="hover:bg-primary hidden sm:block text-primary font-semibold hover:text-white border border-primary px-2 sm:px-4 py-1 duration-200">
                  <Link to="/login">Login</Link>
                </button>
                <button className="hover:bg-gray-700 text-xs sm:text-sm  text-white bg-gray-600 font-semibold border border-gray-700 px-2 sm:px-4 py-1 duration-200">
                  Sell Your Car
                </button>
              </div>

              {open ? (
                <div onClick={() => setOpen(!open)}>
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              ) : (
                <div onClick={() => setOpen(!open)}>
                  <AlignRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              )}

              {/* Right: Mobile Menu Icon */}
            </div>
          </div>

          {/* Large Screen (Desktop) Layout */}
          <div className="hidden md:flex w-full justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center font-bold text-xl">
              <p className="bg-secondary text-white px-1 border-2 border-black border-r-0">
                NK
              </p>
              <p className="border-2 border-black px-1 border-l-0">
                Traders<span className="text-secondary">.</span>
              </p>
            </div>

            {/* Menu Section */}
            <div>
              <ul className="flex items-center text-gray-600 uppercase">
                {navMenu.map((item) => (
                  <li key={item.id}>
                    <Link to="/login"
                      to={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button Section */}
            <div className="flex items-center gap-1">
              <button className="hover:bg-primary text-primary font-semibold hover:text-white border border-primary px-4 py-1 duration-200">
                <Link to="/login">Login</Link>
              </button>
              <button className="hover:bg-gray-700 text-white bg-gray-600 font-semibold border border-gray-700 px-4 py-1 duration-200">
                Sell Your Car
              </button>
            </div>
          </div>

          {/* Responsive Menu */}
          <div>
            <AnimatePresence mode="wait">
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-[2rem] left-0 w-full h-screen z-20"
                >
                  <div className="font-semibold text-xs uppercase shadow-2xl bg-gray-700 text-white py-10 m-6">
                    <ul className="flex flex-col justify-center items-center gap-5">
                      {navMenu.map((item) => (
                        <li key={item.id}>
                          <Link to="/login" to={item.link}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
