import { AlignRight, Mail, User, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { BiLogoWhatsapp } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import Logo from "./Logo";
import { AuthContext } from "../../providers/AuthProvider";

const navMenu = [
  { name: "car", link: "#", id: 1 },
  { name: "bike", link: "#", id: 2 },
  { name: "truck", link: "#", id: 3 },
  { name: "others", link: "#", id: 4 },
  { name: "blog", link: "#", id: 5 },
];

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  console.log(user);

  return (
    <nav className="bg-white">
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
          <div className="text-xs block sm:hidden">
            <div className="flex items-center gap-1 cursor-pointer mb-1 sm:mb-0">
              <Mail className="h-3 w-3" />
              <p>nk-traders@gmail.com</p>
            </div>
            <div className="flex items-center gap-1">
              <p>Follow Us</p>
              <div className="flex items-center gap-1">
                <CiFacebook className="h-4 w-4 cursor-pointer" />
                <CiInstagram className="h-4 w-4 cursor-pointer" />
                <BiLogoWhatsapp className="h-4 w-4 cursor-pointer" />
                <AiOutlineYoutube className="h-4 w-4 cursor-pointer" />
              </div>
            </div>
          </div>
          {user ? (
            <button className="w-7 h-7 flex items-center justify-center hover:bg-primary text-primary font-semibold hover:text-white border border-primary duration-200 rounded-full sm:hidden">
              <Link to="/dashboard/dashboard-overview">
                <User />
              </Link>
            </button>
          ) : (
            <button className="hover:bg-primary text-primary font-semibold hover:text-white border border-primary px-4 py-1 duration-200 sm:hidden">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>

        <div className="flex justify-between items-center py-2 sm:py-3 relative w-full">
          {/* Small Screen (Mobile) Layout */}
          <div className="grid grid-cols-2 w-full justify-between items-center md:hidden">
            {/* Left: Logo */}
            <Logo />

            <div className="flex items-center justify-end gap-2 sm:gap-10">
              {/* Center: Button Section (Hidden on mobile) */}
              <div className="flex items-center gap-1">
                <button className="hover:bg-gray-700 text-white bg-gray-600 font-semibold border border-gray-700 px-4 py-1 duration-200">
                  Sell Your Car
                </button>
                {user ? (
                  <div className="hidden sm:block">
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-primary text-primary font-semibold hover:text-white border border-primary duration-200 rounded-full">
                      <Link to="/dashboard/dashboard-overview">
                        <User />
                      </Link>
                    </button>
                  </div>
                ) : (
                  <button className="hover:bg-primary hidden sm:block text-primary font-semibold hover:text-white border border-primary px-4 py-1 duration-200">
                    <Link to="/login">Login</Link>
                  </button>
                )}
              </div>

              {open ? (
                <div onClick={() => setOpen(!open)}>
                  <X className="h-8 w-8" />
                </div>
              ) : (
                <div onClick={() => setOpen(!open)}>
                  <AlignRight className="h-8 w-8" />
                </div>
              )}

              {/* Right: Mobile Menu Icon */}
            </div>
          </div>

          {/* Large Screen (Desktop) Layout */}
          <div className="hidden md:flex w-full justify-between items-center">
            <Logo />
            {/* Menu Section */}
            <div>
              <ul className="flex items-center text-gray-600 uppercase">
                {navMenu.map((item) => (
                  <li key={item.id}>
                    <Link
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
              <button className="hover:bg-gray-700 text-white bg-gray-600 font-semibold border border-gray-700 px-4 py-1 duration-200">
                Sell Your Car
              </button>
              {user ? (
                <button className="w-7 h-7 flex items-center justify-center hover:bg-primary text-primary font-semibold hover:text-white border border-primary duration-200 rounded-full">
                  <Link to="/dashboard/dashboard-overview">
                    <User />
                  </Link>
                </button>
              ) : (
                <button className="hover:bg-primary text-primary font-semibold hover:text-white border border-primary px-4 py-1 duration-200">
                  <Link to="/login">Login</Link>
                </button>
              )}
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
                          <Link to={item.link}>{item.name}</Link>
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
