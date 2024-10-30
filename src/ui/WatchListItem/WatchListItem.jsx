import { useDispatch } from "react-redux";
import { removewatch } from "../../Reducer/watchlistReducer";
import "./WatchListItem.css";
import { Link } from "react-router-dom";

function WatchListItem({ list }) {
  const { imdbID, Poster: poster, Title: title } = list;

  const dispatch = useDispatch();
  const handleremove = () => {
    dispatch(removewatch(imdbID));
  };
  return (
    <li>
      <div className="itemWrapperlist">
        <div className="imgWrapper">
          <img src={poster} alt={title} />
        </div>
        <div className="textWrapperlist">
          <p>{title}</p>
        </div>
        <div className="btnWrapperlist">
          <button onClick={handleremove}>- Remove </button>
          <Link to={`/details?imdbID=${imdbID}`}>
            <button>More Details </button>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default WatchListItem;
