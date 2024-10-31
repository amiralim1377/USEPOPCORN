import { Link, useParams } from "react-router-dom";
import "./FilmItems.css";
import { useDispatch, useSelector } from "react-redux";
import { addwatch, removewatch } from "../../Reducer/watchlistReducer";
function FilmItem({ item }) {
  const { Title: title, Poster: poster, Year: year, imdbID } = item;
  const { film } = useParams();
  const dispatch = useDispatch();
  const isAdded = useSelector((state) =>
    state.watchlist.some((film) => film.imdbID === imdbID)
  );

  const handleaddwatchlist = () => {
    dispatch(addwatch(item));
  };

  const handleremovewatchlist = () => {
    dispatch(removewatch(imdbID));
  };
  return (
    <li>
      <div className="itemWrapper">
        <div className="imgWrapper">
          <img src={poster} alt={title} />
        </div>
        <div className="textWrapper">
          <p>{title}</p>
          <p>{year}</p>
        </div>
        <div className="btnWrapper">
          <Link to={`/details?imdbID=${imdbID}`}>
            <button>More Details</button>
          </Link>
          {!isAdded ? (
            <button onClick={handleaddwatchlist}>+Add To Watchlist</button>
          ) : (
            <button onClick={handleremovewatchlist}>
              -Remove from Watchlist
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default FilmItem;
