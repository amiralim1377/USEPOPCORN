import { Link } from "react-router-dom";
import "./Error.css";
function Error({ ErrorMessage }) {
  return (
    <div className="ErrorWrapper">
      <p className="ErrorStyle">{ErrorMessage} =(</p>
      <Link to="/">
        <button className="button-40" role="button">
          Back To HomePage
        </button>
      </Link>
    </div>
  );
}

export default Error;
