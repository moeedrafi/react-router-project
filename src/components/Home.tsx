import { Link } from "react-router";
import TeamLogo from "./TeamLogo";
import useTeamNames from "../hooks/useTeamNames";
import { TeamsType } from "../utils/types";

export const Home = () => {
  const { loading, response } = useTeamNames();
  const teamNames = response as TeamsType[];

  if (loading) {
    return null;
  }

  return (
    <div className="container">
      <h1 className="large-header">Hash History Basketball League</h1>
      <h3 className="header text-center">Select a team</h3>

      <div className="home-grid">
        {teamNames.map((teamId: TeamsType) => (
          <Link to={`/${teamId}`} key={teamId}>
            <TeamLogo id={teamId} width="125px" />
          </Link>
        ))}
      </div>
    </div>
  );
};
