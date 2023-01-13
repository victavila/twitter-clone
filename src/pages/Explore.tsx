import DefaultHeader from "../components/DefaultHeader"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import SignUpCard from "../components/SignUpCard"
import Timeline from "../components/Timeline"
import "../styles/Page.css";

const Explore = () => {
  return ( 
    <div className="explore">
      <div className="page">
        <DefaultHeader />
        <main>
          <SearchBar />
          <Timeline />
          <SignUpCard />
        </main>
        <Footer />
      </div>
    </div>
  )
};

export default Explore;