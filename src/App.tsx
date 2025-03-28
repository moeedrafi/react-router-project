import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { Teams } from "./components/Teams";
import { Players } from "./components/Players";
import Navbar from "./components/Navbar";
import TeamPage from "./components/TeamPage";
import Player from "./components/Player";
import Team from "./components/Team";
import Articles from "./components/Articles";
import Article from "./components/Article";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

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
              element={<div className="sidebar-instruction">Select a Team</div>}
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
      </div>
    </Router>
  );
};

export default App;
