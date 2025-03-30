import { lazy, Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router";

import Navbar from "./components/Navbar";
import { Loading } from "./components/Loading";
const Home = lazy(() => import("./components/Home"));
const Teams = lazy(() => import("./components/Teams"));
const TeamPage = lazy(() => import("./components/TeamPage"));
const Players = lazy(() => import("./components/Players"));
const Player = lazy(() => import("./components/Player"));
const Team = lazy(() => import("./components/Team"));
const Articles = lazy(() => import("./components/Articles"));
const Article = lazy(() => import("./components/Article"));

function Routes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/players",
      element: <Players />,
      children: [
        { path: ":playerId", element: <Player /> },
        {
          path: "",
          element: <div className="sidebar-instruction">Select a player</div>,
        },
      ],
    },
    {
      path: "/teams",
      element: <Teams />,
      children: [
        { path: ":teamId", element: <Team /> },
        {
          path: "",
          element: <div className="sidebar-instruction">Select a Team</div>,
        },
      ],
    },
    { path: "/:teamId", element: <TeamPage /> },
    {
      path: "/:teamId/articles",
      element: <Articles />,
      children: [
        { path: ":articleId", element: <Article /> },
        {
          path: "",
          element: <div className="sidebar-instruction">Select an article</div>,
        },
      ],
    },
  ]);
}

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
