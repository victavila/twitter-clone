import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";
import SearchBar from "../components/SearchBar";
import SignUpCard from "../components/SignUpCard";
import Timeline from "../components/Timeline";
import "../styles/Page.css";

const ProfilePage = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="main__middle">
          <ProfileHeader />
          <Timeline />
        </div>
        <div className="main__end">
          <SearchBar />
          <SignUpCard />
        </div>
      </main>
    </div>
  )
};

export default ProfilePage