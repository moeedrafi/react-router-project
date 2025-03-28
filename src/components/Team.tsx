import { Link, useParams } from "react-router";
import useTeam from "../hooks/useTeam";
import { TeamType, TeamsType } from "../utils/types";
import TeamLogo from "./TeamLogo";

const Team = () => {
  const { teamId } = useParams<{ teamId: TeamsType }>();
  const { loading, response } = useTeam(teamId as TeamsType);
  const team = response as TeamType;

  if (loading) {
    return null;
  }

  return (
    <div className="panel">
      <div style={{ width: "100%" }}>
        <TeamLogo id={team.id} className="center" />
        <h1 className="medium-header">{team.name}</h1>
        <ul className="info-list row">
          <li>
            est.
            <div>{team.established}</div>
          </li>
          <li>
            Manager<div>{team.manager}</div>
          </li>
          <li>
            Coach<div>{team.coach}</div>
          </li>
        </ul>

        <Link to={`/${teamId}`} className="center btn-main">
          {team.name} Team Page
        </Link>
      </div>
    </div>
  );
};

export default Team;
