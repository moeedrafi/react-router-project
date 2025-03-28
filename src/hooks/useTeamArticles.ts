import { TeamsType } from "../utils/types";
import useFetch from "./useFetch";

export default function useTeamsArticles(team: TeamsType) {
  return useFetch("/articles", "POST", JSON.stringify({ team }));
}
