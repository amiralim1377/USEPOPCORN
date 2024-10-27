import InputElem from "../../ui/inputElem/inputElem";
import "./HomePage.css";

function Homepage() {
  return (
    <div>
      <div className="spanElem"></div>
      <div className="textInputWrapper">
        <p className="moto">SEARCH,FIND,ENJOY</p>
        <p className="moto-des">Find your next favorite movie in second</p>
        <InputElem />
      </div>
    </div>
  );
}

export default Homepage;
