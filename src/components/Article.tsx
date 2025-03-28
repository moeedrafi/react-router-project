import { useParams } from "react-router";
import useArticle from "../hooks/useArticle";
import { ArticleType } from "../utils/types";

const Article = () => {
  const { teamId, articleId } = useParams();

  const { loading, response } = useArticle({ teamId, articleId });
  const article = response as ArticleType;

  if (loading) {
    return null;
  }

  return (
    <div className="panel">
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
};

export default Article;
