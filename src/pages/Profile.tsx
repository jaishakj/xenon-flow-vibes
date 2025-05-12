
import { Navbar } from "@/components/layout/Navbar";
import { ProfileHeader, ProfileTabs } from "@/components/profile/ProfileHeader";

const Profile = () => {
  return (
    <div className="min-h-screen bg-xenon-900 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <ProfileHeader />
        <ProfileTabs />
      </div>
    </div>
  );
};

export default Profile;
