import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Bell,
  Folder,
  CheckSquare,
  BarChart2,
} from "lucide-react";

// Stub user type – wire to real auth later
const mockUser = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  avatarUrl: null, // pass image URL here when implemented
};

export default function Sidebar({ initialCollapsed = true }) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);

  const items = [
    { label: "Dashboard", icon: Home, href: "/dashboard" },
    { label: "Notifications", icon: Bell, href: "/notifications" },
    { label: "My Trips", icon: Folder, href: "/trips" },
    { label: "Tasks", icon: CheckSquare, href: "/tasks" },
    { label: "Analytics", icon: BarChart2, href: "/analytics" },
  ];

  return (
    <aside
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      className={`h-screen bg-white border-r flex flex-col justify-between transition-all duration-300 ease-out ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Top */}
      <div className="px-4 pt-6">
        <div
          className={`flex items-center mb-10 ${
            collapsed ? "justify-center" : "justify-start"
          }`}
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
              TB
            </div>
            {!collapsed && (
              <span className="ml-2 font-display font-bold text-lg text-primary">
                Travel Buddy
              </span>
            )}
          </Link>
        </div>

        <nav className="space-y-1">
          {items.map(({ label, icon: Icon, href, badge }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors ${
                collapsed ? "justify-center px-0" : ""
              }`}
            >
              <Icon size={20} />
              {!collapsed && (
                <>
                  <span className="flex-1 text-sm font-medium">{label}</span>
                  {badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {badge}
                    </span>
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div className="border-t mx-4 px-4 pt-6 pb-2 mb-6">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "gap-4"
          }`}
        >
          <div className="p-0.5 rounded-full border border-gray-200">
            {mockUser.avatarUrl ? (
              <img
                src={mockUser.avatarUrl}
                className="w-10 h-10 rounded-full object-cover"
                alt="User avatar"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                {mockUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}
          </div>
          {!collapsed && (
            <div className="text-sm">
              <div className="font-medium">{mockUser.name}</div>
              <div className="text-gray-500 text-xs">
                {mockUser.email}
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}