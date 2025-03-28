import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { Teams } from "./components/Teams";
import { Players } from "./components/Players";
import Navbar from "./components/Navbar";
import TeamPage from "./components/TeamPage";
import Player from "./components/Player";
import Team from "./components/Team";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />}>
            <Route path="" element={<h1>Select a Player</h1>} />
            <Route path=":playerId" element={<Player />} />
          </Route>
          <Route path="/teams" element={<Teams />}>
            <Route path="" element={<h1>Select a Team</h1>} />
            <Route path=":teamId" element={<Team />} />
          </Route>
          <Route path="/:teamId" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
