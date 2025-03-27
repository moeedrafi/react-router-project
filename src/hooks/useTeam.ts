import useFetch from "./useFetch";

export default function useTeam(team: string) {
  return useFetch("/team", "POST", JSON.stringify({ team }));
}
