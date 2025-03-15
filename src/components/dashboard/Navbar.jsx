import { MenuIcon, Search, Settings } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Logo from "../shared/Logo";

const Navbar = () => {
  const { isSidebarCollapsed, setIsSidebarCollapsed } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3">
      {/* search bar */}
      <div className="flex items-center gap-8">
        {isSidebarCollapsed ? (
          <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}>
            <MenuIcon className="h-8 w-8 text-whiten" />
          </button>
        ) : null}
      </div>
      <div className="flex items-center gap-8">
        {isSidebarCollapsed ? (
          <Logo/>
        ) : null}
      </div>

      {/* Icons */}
      <div className="flex itemsce">
        <Link
          to="/settings"
          className="h-min w-min rounded p-2 hover:bg-gray-100"
        >
          <Settings className="h-6 2-6 cursor-pointer" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2rem] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
