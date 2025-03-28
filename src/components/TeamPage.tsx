import { Link, useParams } from "react-router";
import useTeam from "../hooks/useTeam";
import useTeamNames from "../hooks/useTeamNames";
import useTeamsArticles from "../hooks/useTeamArticles";
import TeamLogo from "./TeamLogo";
import { Article, Team, TeamsType } from "../utils/types";
import { slugify } from "../utils";

function useTeamPageData(teamId: TeamsType) {
  const { loading: loadingTeamNames } = useTeamNames();

  const { loading: loadingarticles, response: articlesResponse } =
    useTeamsArticles(teamId);
  const articles = (articlesResponse ?? []) as Article[];

  const { loading: loadingTeam, response: teamResponse } = useTeam(teamId);
  const team = (teamResponse ?? null) as Team;

  return {
    articles,
    team,
    loading: loadingTeam || loadingTeamNames || loadingarticles,
  };
}

const TeamPage = () => {
  const { teamId } = useParams<{ teamId: TeamsType }>();
  const validTeamId =
    teamId &&
    ["bulls", "foxes", "hedgehogs", "koalas", "lemurs"].includes(teamId)
      ? (teamId as TeamsType)
      : null;

  const { articles, team, loading } = useTeamPageData(validTeamId ?? "bulls");

  if (!validTeamId) {
    return <h1 className="text-center">the {teamId} is not a valid team</h1>;
  }

  if (loading) {
    return <p>LOADING....</p>;
  }

  return (
    <div className="panel">
      <TeamLogo id={validTeamId} />
      <h1 className="medium-header">{team.name}</h1>
      <h4 style={{ margin: 5 }}>
        <Link to={{ pathname: "/players", search: `?teamId=${teamId}` }}>
          View Roster
        </Link>
      </h4>

      <h4>Championships</h4>
      <ul className="championships">
        {team.championships.map((ship) => (
          <li key={ship}>{ship}</li>
        ))}
      </ul>

      <ul className="info-list row" style={{ width: "100%" }}>
        <li>
          Est.<div>{team.established}</div>
        </li>
        <li>
          Manager<div>{team.manager}</div>
        </li>
        <li>
          Coach<div>{team.coach}</div>
        </li>
        <li>
          Record
          <div>
            {team.wins}-{team.losses}
          </div>
        </li>
      </ul>

      <h2 className="header">Articles</h2>
      <ul className="articles">
        {articles.map((article) => (
          <li key={article.id}>
            <h4 className="article-title">
              <Link to={`articles/${slugify(article.title)}`}>
                {article.title}
              </Link>
            </h4>

            <div className="article-date">
              {new Date(article.date).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
