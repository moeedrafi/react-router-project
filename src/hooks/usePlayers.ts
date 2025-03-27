import { Player } from "../utils/types";
import useFetch from "./useFetch";

export default function usePlayers(team: Player) {
  return useFetch("/players", "POST", JSON.stringify({ team }));
}
