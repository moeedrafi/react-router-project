import { useParams } from "react-router";
import useArticle from "../hooks/useArticle";
import { ArticleType } from "../utils/types";
import { Loading } from "./Loading";

const Article = () => {
  const { teamId, articleId } = useParams();

  const { loading, response } = useArticle({ teamId, articleId });
  const article = response as ArticleType;

  return (
    <div className="panel">
      {loading ? (
        <Loading />
      ) : (
        <article className="article">
          <h1 className="header">{article.title}</h1>
          <p>{article.body}</p>
        </article>
      )}
    </div>
  );
};

export default Article;
