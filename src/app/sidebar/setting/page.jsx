import DashboardLayout from "../../dashboardlayout/page";

// pages/dashboard/settings.js
const Settings = () => {
  return (
    <div>
      <DashboardLayout>
        <h1>Settings Page</h1>
      </DashboardLayout>
    </div>
  );
};

export default Settings;

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
