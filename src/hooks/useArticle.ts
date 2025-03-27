import useFetch from "./useFetch";

interface ArticleArgs {
  title: string;
  content: string;
  author: string;
}

export default function useArticle(args: ArticleArgs) {
  return useFetch("/article", "POST", JSON.stringify(args));
}
