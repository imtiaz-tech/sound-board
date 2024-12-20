"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import DashboardLayout from "../../app/dashboard/layout";

const Sidebar = () => {
  const router = useRouter();
  console.log("Current route:", router.pathname);

  return (
    <div className="w-64 h-screen bg-gray-100 fixed top-0 left-0 p-12">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard/home"
            className={`block py-2 px-4 rounded ${
              router.pathname === "/dashboard/home"
                ? "bg-blue-500 text-white font-bold"
                : "text-gray-700 hover:bg-blue-100"
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/profile"
            className={`block py-2 px-4 rounded ${
              router.pathname === "/dashboard/profile"
                ? "bg-blue-500 text-white font-bold"
                : "text-gray-700 hover:bg-blue-100"
            }`}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className={`block py-2 px-4 rounded ${
              router.pathname === "/dashboard/settings"
                ? "bg-blue-500 text-white font-bold"
                : "text-gray-700 hover:bg-blue-100"
            }`}
          >
            Settings
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/about"
            className={`block py-2 px-4 rounded ${
              router.pathname === "/dashboard/about"
                ? "bg-blue-500 text-white font-bold"
                : "text-gray-700 hover:bg-blue-100"
            }`}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

Sidebar.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
