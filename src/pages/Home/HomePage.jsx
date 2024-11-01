import InputElem from "../../ui/inputElem/inputElem";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="textInputWrapper">
        <div className="pElem">
          <p className="moto">SEARCH,FIND,ENJOY</p>
        </div>
        <InputElem />
      </div>
    </div>
  );
}

export default HomePage;
