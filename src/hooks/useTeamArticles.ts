import useFetch from "./useFetch";

export default function useTeamsArticles(team: string) {
  return useFetch("/articles", "POST", JSON.stringify({ team }));
}
