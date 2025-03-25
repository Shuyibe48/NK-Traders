import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  Car,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  LockIcon,
  Plus,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import HostMenu from "./HostMenu";
import DarkLogo from "../shared/DarkLogo";
import Logo from "../shared/Logo";

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
          {/* {isSidebarCollapsed ? null : ( */}
          <button
            className="py-3"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            <X className="h-6 w-6 text-white hover:text-[#adb7cb]" />
          </button>
          {/* )} */}
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
          <HostMenu icon={Car} label="Cars" href="/search" />
          <HostMenu icon={User} label="Users" href="/users" />
          <HostMenu icon={Users} label="Teams" href="/teams" />
          <HostMenu icon={Settings} label="Settings" href="/settings" />
        </nav>

        {/* project */}
        <button
          onClick={() => setShowProjects((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-[#adb7cb]"
        >
          <span className="">Projects</span>
          {showProjects ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {/* project list */}
        {showProjects && (
          <>
            <HostMenu
              icon={AlertCircle}
              label="Urgent"
              href="/projects/urgent"
            />
            <HostMenu icon={ShieldAlert} label="High" href="/projects/high" />
            <HostMenu
              icon={AlertTriangle}
              label="Medium"
              href="/projects/medium"
            />
            <HostMenu icon={AlertOctagon} label="Low" href="/projects/low" />
            <HostMenu icon={Layers3} label="Backlog" href="/projects/backlog" />
          </>
        )}


        {/* priority */}
        <button
          onClick={() => setShowPriority((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-[#adb7cb]"
        >
          <span className="">Priority</span>
          {showPriority ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {/* priority list */}
        {showPriority && (
          <>
            <HostMenu
              icon={AlertCircle}
              label="Urgent"
              href="/projects/urgent"
            />
            <HostMenu icon={ShieldAlert} label="High" href="/projects/high" />
            <HostMenu
              icon={AlertTriangle}
              label="Medium"
              href="/projects/medium"
            />
            <HostMenu icon={AlertOctagon} label="Low" href="/projects/low" />
            <HostMenu icon={Layers3} label="Backlog" href="/projects/backlog" />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
