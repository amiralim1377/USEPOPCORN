import { Link, useNavigate } from "react-router-dom";
import InputElem from "../inputElem/inputElem";
import "./NavBar.css";
import { PiListPlus } from "react-icons/pi";
import { useSelector } from "react-redux";
import { LuPopcorn } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";

function NavBar() {
  const watchlistitem = useSelector((state) => state.watchlist);
  const navigate = useNavigate();

  const gotobackpage = () => {
    navigate(-1);
  };
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
        <InputElem />
      </div>
      <div className="righticonwrapper">
        <IoArrowBack className="navbaricon" onClick={gotobackpage} />
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
    </div>
  );
}

export default NavBar;
