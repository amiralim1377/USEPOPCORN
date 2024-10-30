import { useNavigate, useSearchParams } from "react-router-dom";
import "./DetailsMovie.css";
import { useQuery } from "@tanstack/react-query";
import { getfilmsbyid } from "../../services/getfilmsbyid";
import { useDispatch, useSelector } from "react-redux";
import { addwatch } from "../../Reducer/watchlistReducer";

function DetailsMovie() {
  const [searchparams] = useSearchParams();
  const imdbID = searchparams?.get("imdbID") ?? "";
  const isAdded = useSelector((state) =>
    state.watchlist.some((film) => film.imdbID === imdbID)
  );
  console.log(isAdded);

  const { isLoading, data: filmsdata } = useQuery({
    queryKey: ["querykey"],
    queryFn: () => getfilmsbyid(imdbID),
  });

  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();

  const handleAddWatch = () => {
    dispatch(addwatch(filmsdata));
    navigate("/watchlist");
  };

  const hanldegowatchlist = () => {
    navigate("/watchlist");
  };

  return (
    <div>
      <div className="detailsAllWrapper">
        <div className="detailsWrapper">
          <div className="imageWrapper">
            <img src={filmsdata.Poster} alt={filmsdata.Title} />
          </div>
          <div className="textDetails">
            <h1>{filmsdata.Title}</h1>
            <div className="firstdetails">
              <p>Year:{filmsdata.Year}</p>
              <p>Runtime:{filmsdata.Runtime}</p>
              <p>Genre:{filmsdata.Genre}</p>
              <p>Released:{filmsdata.Released}</p>
              <p>imdbRating: {filmsdata.imdbRating}</p>
              <p>Awards: {filmsdata.Awards}</p>
            </div>
            <div className="summery">
              <p>{filmsdata.Plot}</p>
            </div>
            <div className="personBtnWrapper">
              <div className="personDetails">
                <p>Director: {filmsdata.Director}</p>
                <p>Writer:{filmsdata.Writer}</p>
                <p>Actors: {filmsdata.Actors}</p>
              </div>
              <div className="btnWrapperDetailsPage">
                <button onClick={handleback}>back</button>
                {!isAdded ? (
                  <button onClick={handleAddWatch}>Add To Watch List</button>
                ) : (
                  <button onClick={hanldegowatchlist}>
                    Before Added
                    <br />
                    show Watchlist
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsMovie;
