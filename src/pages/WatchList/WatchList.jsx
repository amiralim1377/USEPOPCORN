import { useSelector } from "react-redux";
import List from "../../ui/List/List";
import Error from "../../ui/Error/Error";
import "./WatchList.css";

function WatchList() {
  const isAddedInWatchlist = useSelector((state) => state.watchlist);

  return (
    <div>
      {isAddedInWatchlist.length == 0 && (
        <Error
          ErrorMessage={`your WatchList is empty.
          just search your favorit movie`}
        />
      )}
      <List />
    </div>
  );
}

export default WatchList;
