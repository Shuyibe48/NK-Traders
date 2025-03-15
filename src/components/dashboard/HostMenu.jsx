import { NavLink } from "react-router-dom";

const HostMenu = ({ href, icon: Icon, label, isCollapsed }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `flex items-center gap-3 px-8 py-3 transition-colors hover:bg-[#323F5E] rounded-lg hover:text-white ${
          isActive
            ? "bg-[#323F5E] rounded-lg text-white"
            : "text-[#adb7cb] hover:text-gray-100"
        }`
      }
    >
      <Icon className="h-6 w-6" />
      <span className={`font-medium`}>{label}</span>
    </NavLink>
  );
};

export default HostMenu;
