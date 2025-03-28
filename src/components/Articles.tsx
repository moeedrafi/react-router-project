import { Outlet, useParams } from "react-router";
import { Sidebar } from "./Sidebar";
import useTeamsArticles from "../hooks/useTeamArticles";
import { ArticleType, TeamsType } from "../utils/types";
import { Loading } from "./Loading";

const Articles = () => {
  const { teamId } = useParams();
  const { loading, response } = useTeamsArticles(teamId as TeamsType);
  const articles = response as ArticleType[];

  return (
    <div className="container two-column">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Sidebar
            title="Articles"
            list={articles.map((article) => article.title)}
          />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Articles;
