// components/DashboardLayout.js
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="content">{children}</div>

      <style jsx>{`
        .dashboard-layout {
          display: flex;
        }
        .content {
          margin-left: 250px;
          padding: 20px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
