import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./AppLayout/AppLayout";
import Search from "./pages/Search/Search";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DetailsMovie from "./pages/DetailsMovie/DetailsMovie";
import WatchList from "./pages/WatchList/WatchList";
import Homepage from "./pages/Home/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "homepage",
        index: true,
        element: <Homepage />,
      },
      {
        path: "/",
        index: true,
        element: <Homepage />,
      },
      {
        path: "search/:film",
        element: <Search />,
      },
      {
        path: "details",
        element: <DetailsMovie />,
      },
      {
        path: "watchlist",
        element: <WatchList />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
