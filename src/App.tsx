import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";

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

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />}>
              <Route
                path=""
                element={
                  <div className="sidebar-instruction">Select a Player</div>
                }
              />
              <Route path=":playerId" element={<Player />} />
            </Route>
            <Route path="/teams" element={<Teams />}>
              <Route
                path=""
                element={
                  <div className="sidebar-instruction">Select a Team</div>
                }
              />
              <Route path=":teamId" element={<Team />} />
            </Route>
            <Route path="/:teamId" element={<TeamPage />} />
            <Route path="/:teamId/articles" element={<Articles />}>
              <Route
                path=""
                element={
                  <div className="sidebar-instruction">Select an Article</div>
                }
              />
              <Route path=":articleId" element={<Article />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
