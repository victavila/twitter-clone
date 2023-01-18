import DefaultHeader from "../components/DefaultHeader";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import SignUpCard from "../components/SignUpCard";
import Timeline from "../components/Timeline";
import "../styles/Page.css";

const ProfilePage = () => {
  return (
    <div className="page">
      <DefaultHeader />
      <main className="main">
        <div className="main__middle">
          <Timeline />
        </div>
        <div className="main__end">
          <SearchBar />
          <SignUpCard />
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default ProfilePage