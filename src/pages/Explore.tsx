import { Outlet } from "react-router-dom";
import DefaultHeader from "../components/DefaultHeader"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import SignUpCard from "../components/SignUpCard"
import Timeline from "../components/Timeline"
import "../styles/Page.css";

const Explore = () => {
  return ( 
    <div className="page">
      <DefaultHeader />
      <main className="main">
        <div className="main__middle">
          <SearchBar />
          <Timeline />
        </div>
        <div className="main__end">
          <SignUpCard />
        </div>
      </main>
      <Footer />
      <Outlet />
    </div>
  )
};

export default Explore;