import { Outlet, useParams } from "react-router";
import { Sidebar } from "./Sidebar";
import useTeamsArticles from "../hooks/useTeamArticles";
import { ArticleType, TeamsType } from "../utils/types";

const Articles = () => {
  const { teamId } = useParams();
  const { loading, response } = useTeamsArticles(teamId as TeamsType);
  const articles = response as ArticleType[];

  if (loading) {
    return <p>LOADING</p>;
  }

  return (
    <div className="container two-column">
      <Sidebar
        title="Articles"
        list={articles.map((article) => article.title)}
      />
      <Outlet />
    </div>
  );
};

export default Articles;
