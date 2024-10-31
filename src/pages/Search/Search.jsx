import { useQuery } from "@tanstack/react-query";
import { getfilms } from "../../services/getfilms";
import { useParams } from "react-router-dom";
import Spinner from "../../ui/spinner/Spinner";
import "./Search.css";
import FilmItem from "../../ui/FilmItems/FilmItem";
import Error from "../../ui/Error/Error";
import { useEffect, useState } from "react";

function Search() {
  const { film } = useParams();
  const [query, setQuery] = useState(film);
  const [cachedData, setCachedData] = useState(null);

  useEffect(() => {
    setQuery(film);
  }, [film]);

  const {
    isLoading,
    data: filmsdata,
    error,
  } = useQuery({
    queryKey: ["querykey", query],
    queryFn: () => getfilms(query),
    onSuccess: (data) => {
      setCachedData(data);
    },
  });

  if (error || (filmsdata && filmsdata.Response === "False")) {
    return <Error ErrorMessage={filmsdata?.Error || "Error loading data"} />;
  }

  const dataToShow = isLoading && cachedData ? cachedData : filmsdata;

  if (isLoading && !cachedData) {
    return <Spinner />;
  }

  const imdbIDkey = filmsdata?.Search?.imdbID;

  return (
    <div>
      <ul>
        {dataToShow?.Search?.map((item) => (
          <FilmItem key={item.imdbIDkey} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Search;
