import { useSelector } from "react-redux";
import "./List.css";
import WatchListItem from "../WatchListItem/WatchListItem";

function List() {
  const watchlist = useSelector((state) => state.watchlist);

  return (
    <div>
      <ul>
        {watchlist.map((list) => (
          <WatchListItem list={list} />
        ))}
      </ul>
    </div>
  );
}

export default List;