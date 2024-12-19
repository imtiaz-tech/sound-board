// pages/dashboard/settings.js
const Settings = () => {
  return (
    <div>
      <h1>Settings Page</h1>
    </div>
  );
};

export default Settings;

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
