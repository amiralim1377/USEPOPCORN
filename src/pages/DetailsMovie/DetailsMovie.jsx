import { useNavigate, useSearchParams } from "react-router-dom";
import "./DetailsMovie.css";
import { useQuery } from "@tanstack/react-query";
import { getfilmsbyid } from "../../services/getfilmsbyid";
import { useDispatch, useSelector } from "react-redux";
import { addwatch, removewatch } from "../../Reducer/watchlistReducer";
import Error from "../../ui/Error/Error";
import { useState } from "react";
import Spinner from "../../ui/spinner/Spinner";

function DetailsMovie() {
  const [searchparams] = useSearchParams();
  const imdbID = searchparams?.get("imdbID") ?? "";
  const isAdded = useSelector((state) =>
    state.watchlist.some((film) => film.imdbID === imdbID)
  );

  const [cachedData, setCachedData] = useState(null);

  const {
    isLoading,
    data: filmsdata,
    error,
  } = useQuery({
    queryKey: ["querykey", imdbID],
    queryFn: () => getfilmsbyid(imdbID),
    onSuccess: (data) => {
      setCachedData(data);
    },
  });

  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();

  const handleAddWatch = () => {
    dispatch(addwatch(filmsdata));
  };

  const handleremovewatch = () => {
    dispatch(removewatch(imdbID));
  };

  const handlegowatchlist = () => {
    navigate("/watchlist");
  };

  if (isLoading && !cachedData) return <Spinner />;
  const dataToShow = isLoading && cachedData ? cachedData : filmsdata;
  if (error || (dataToShow && dataToShow.Response === "False")) {
    return <Error ErrorMessage={dataToShow?.Error || "Error loading data"} />;
  }

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
              <p>Year: {filmsdata.Year}</p>
              <p>Runtime: {filmsdata.Runtime}</p>
              <p>Genre: {filmsdata.Genre}</p>
              <p>Released: {filmsdata.Released}</p>
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
                <button onClick={handleback}>Back</button>
                {!isAdded ? (
                  <button onClick={handleAddWatch}>+Watch List</button>
                ) : (
                  <button onClick={handleremovewatch}>
                    Remove from Watchlist
                  </button>
                )}
                <button onClick={handlegowatchlist}>show Watchlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsMovie;
