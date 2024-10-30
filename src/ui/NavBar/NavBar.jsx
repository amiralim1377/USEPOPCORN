import InputElem from "../inputElem/inputElem";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="NavBarWrapper">
      <div className="navbarlogo">
        <p>🍿UsePopCorn</p>
      </div>
      <div className="navbarinput">
        <input className="" placeholder="search your favorit movie" />
      </div>
      <div>
        <p>➕</p>
      </div>
    </div>
  );
}

export default NavBar;
