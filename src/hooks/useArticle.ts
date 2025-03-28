import useFetch from "./useFetch";

interface ArticleArgs {
  teamId: string | undefined;
  articleId: string | undefined;
}

export default function useArticle(args: ArticleArgs) {
  return useFetch("/article", "POST", JSON.stringify(args));
}
