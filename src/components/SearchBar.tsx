import { FiSearch } from "react-icons/fi";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search">
      <form>
        <div className="search__bar">
          <input className="search__input" placeholder="Search Twitter"></input>
          <FiSearch className="search__icon"></FiSearch>
        </div>
      </form>
    </div>
  )
};

export default SearchBar;