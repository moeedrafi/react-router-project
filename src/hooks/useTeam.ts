import { TeamsType } from "../utils/types";
import useFetch from "./useFetch";

export default function useTeam(team: TeamsType) {
  return useFetch("/team", "POST", JSON.stringify({ team }));
}
