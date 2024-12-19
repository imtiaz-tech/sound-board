// pages/dashboard/profile.js
const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

export default Profile;

Profile.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
