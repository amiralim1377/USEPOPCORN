import { Link } from "react-router-dom";
import InputElem from "../inputElem/inputElem";
import "./NavBar.css";
import { PiListPlus } from "react-icons/pi";
import { useSelector } from "react-redux";
import { LuPopcorn } from "react-icons/lu";

function NavBar() {
  const watchlistitem = useSelector((state) => state.watchlist);
  return (
    <div className="NavBarWrapper">
      <div className="navbarlogo">
        <Link className="navlink" to="/">
          <p>
            <LuPopcorn />
            USE-POPCORN
          </p>
        </Link>
      </div>
      <div className="navbarinput">
        {/* <input className="" placeholder="search your favorit movie" /> */}
        <InputElem />
      </div>
      <Link to="/watchlist" className="navlink">
        <div className="navbarwatchlist">
          <PiListPlus className="navbaricon" />
          <p className="navbartext">Watchlist</p>
          {watchlistitem.length !== 0 && (
            <p className="watchlistlength">{watchlistitem.length}</p>
          )}
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
