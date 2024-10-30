import { Link, useParams } from "react-router-dom";
import "./FilmItems.css";
function FilmItem({ item }) {
  const { Title: title, Poster: poster, Year: year, imdbID } = item;
  const { film } = useParams();
  return (
    <li>
      <div className="itemWrapper">
        <div className="imgWrapper">
          <img src={poster} alt={title} />
        </div>
        <div className="textWrapper">
          <p>Title:{title}</p>
          <p>Year:{year}</p>
        </div>
        <div className="btnWrapper">
          <Link to={`/details?imdbID=${imdbID}`}>
            <button>+ More Details</button>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default FilmItem;
