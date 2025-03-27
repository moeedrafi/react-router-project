import { Teams } from "../utils/types";
import useFetch from "./useFetch";

export default function useTeamsArticles(team: Teams) {
  return useFetch("/articles", "POST", JSON.stringify({ team }));
}
