import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { Teams } from "./components/Teams";
import { Players } from "./components/Players";
import Navbar from "./components/Navbar";
import TeamPage from "./components/TeamPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/:teamId" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
