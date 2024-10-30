import { useQuery } from "@tanstack/react-query";
import { getfilms } from "../../services/getfilms";
import { useParams } from "react-router-dom";
import Spinner from "../../ui/spinner/Spinner";
import "./Search.css";
import FilmItem from "../../ui/FilmItems/FilmItem";
import Error from "../../ui/Error/Error";

function Search() {
  const { film } = useParams();

  const {
    isLoading,
    data: filmsdata,
    error,
  } = useQuery({
    queryKey: ["querykey"],
    queryFn: () => getfilms(film),
  });

  if (isLoading) return <Spinner />;
  if (error || filmsdata.Response == "False")
    return <Error ErrorMessage={filmsdata.Error} />;

  const imdbID = filmsdata?.Search?.imdbID;

  return (
    <div>
      <ul>
        {filmsdata?.Search?.map((item) => (
          <FilmItem key={item.imdbID} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Search;
