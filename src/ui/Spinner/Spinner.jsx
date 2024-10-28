import { BlinkBlur } from "react-loading-indicators";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="Spinner">
      <BlinkBlur
        color="#1676b7"
        size="large"
        text="loading"
        textColor="#000000"
      />
    </div>
  );
}

export default Spinner;
