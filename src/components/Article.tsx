import { Navigate, useParams } from "react-router";
import useArticle from "../hooks/useArticle";
import { ArticleType } from "../utils/types";
import { Loading } from "./Loading";

const Article = () => {
  const { teamId, articleId } = useParams();

  const { loading, response } = useArticle({ teamId, articleId });
  const article = response as ArticleType;

  let body;
  if (loading) {
    body = <Loading />;
  } else if (article === null) {
    body = <Navigate to={`/${teamId}/articles`} />;
  } else {
    body = (
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    );
  }

  return <div className="panel">{body}</div>;
};

export default Article;
