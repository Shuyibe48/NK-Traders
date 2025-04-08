import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Car,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  LockIcon,
  Plus,
  Settings,
  ShieldAlert,
  User,
  UserPen,
  Users,
  X,
} from "lucide-react";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import HostMenu from "./HostMenu";
import Logo from "../shared/Logo";
import { Avatar } from "antd";

const Sidebar = () => {
  const {
    isSidebarCollapsed,
    setIsSidebarCollapsed,
    showProjects,
    setShowProjects,
    showPriority,
    setShowPriority,
  } = useContext(AuthContext);

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-fll z-40 bg-[black] overflow-y-auto w-64 ${
    isSidebarCollapsed ? "w-0 hidden" : "w-64"
  }`;

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-black px-6 pt-3">
          <Logo/>
          <button
            className="py-3"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            <X className="h-6 w-6 text-white hover:text-[#adb7cb]" />
          </button>
        </div>
        {/* Team */}
        <div className="flex items-center gap-5 px-8 py-4">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FNBGIRCYt6m070tIYzvnzwK-Cutu3YvCLg&s"} alt="" width={40} height={40} />
          <div>
            <h3 className="text-md font-bold tracking-wide text-gray-200">
              NK TEAM
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-400" />
              <p className="text-xs text-gray-400">Private</p>
            </div>
          </div>
        </div>
        {/* navbar links */}
        <nav className="z-10 w-full">
          <HostMenu icon={Home} label="Dashboard" href="/dashboard/dashboard-overview" />
          <HostMenu icon={Plus} label="Add Car" href="/dashboard/add-cars" />
          <HostMenu icon={Car} label="Cars" href="/dashboard/manage-cars" />
          <HostMenu icon={User} label="Users" href="/dashboard/manage-users" />
          <HostMenu icon={Users} label="Teams" href="/dashboard/team" />
          <HostMenu icon={Settings} label="Settings" href="/dashboard/setting" />
          <HostMenu icon={UserPen} label="Profile" href="/dashboard/profile" />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
