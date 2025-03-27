import { useParams } from "react-router";
import useTeam from "../hooks/useTeam";
import useTeamNames from "../hooks/useTeamNames";
import useTeamsArticles from "../hooks/useTeamArticles";
import TeamLogo from "./TeamLogo";
import { Article, Teams } from "../utils/types";

function useTeamPageData(teamId: Teams) {
  const { loading: loadingTeamNames, response } = useTeamNames();
  const teamNames = response as Teams[];

  const { loading: loadingarticles, response: articlesResponse } =
    useTeamsArticles(teamId);
  const articles = articlesResponse as Article[];

  const { loading: loadingTeam, response: team } = useTeam(teamId);

  return {
    teamNames,
    articles,
    team,
    loading: loadingTeam || loadingTeamNames || loadingarticles,
  };
}

const TeamPage = () => {
  const { teamId } = useParams();
  const { articles, team, teamNames, loading } = useTeamPageData(
    teamId as Teams
  );

  console.log({ articles, team, teamNames });

  if (loading) {
    return <p>LOADING....</p>;
  }

  if (!teamId || !teamNames.includes(teamId as Teams)) {
    return <h1 className="text-center">the {teamId} is not a valid team</h1>;
  }

  return <div>TeamPage for {teamId}</div>;
};

export default TeamPage;
