import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SignUpCard from "../components/SignUpCard";
import Timeline from "../components/Timeline";
import TweetForm from "../components/TweetForm";
import "../styles/Page.css";

const Home = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="main__middle">
          <div style={{padding: "15px", borderBottom: "solid 1px var(--light-gray)"}}>
            <h1 style={{fontSize: "20px"}}>Home</h1>
          </div>
          <TweetForm />
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

export default Home;