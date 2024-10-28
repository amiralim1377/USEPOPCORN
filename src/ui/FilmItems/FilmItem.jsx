import "./FilmItems.css";
function FilmItem({ item }) {
  const { Title: title, Poster: poster, Year: year } = item;
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
          <button>+ More Details</button>
        </div>
      </div>
    </li>
  );
}

export default FilmItem;
