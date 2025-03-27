import { Teams } from "../utils/types";
import useFetch from "./useFetch";

export default function useTeam(team: Teams) {
  return useFetch("/team", "POST", JSON.stringify({ team }));
}
