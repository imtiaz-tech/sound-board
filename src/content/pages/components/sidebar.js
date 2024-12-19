// components/Sidebar.js
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  console.log("Current route:", router.pathname); // Check active route

  return (
    <div className="sidebar">
      <ul>
        <li className={router.pathname === "/dashboard" ? "active" : ""}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li
          className={router.pathname === "/dashboard/profile" ? "active" : ""}
        >
          <Link href="/dashboard/profile">Profile</Link>
        </li>
        <li
          className={router.pathname === "/dashboard/settings" ? "active" : ""}
        >
          <Link href="/dashboard/settings">Settings</Link>
        </li>
      </ul>

      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background-color: #f8f9fa;
          padding: 20px;
          position: fixed;
          left: 0;
          top: 0;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 15px;
        }
        .active a {
          color: blue;
          font-weight: bold;
        }
        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
