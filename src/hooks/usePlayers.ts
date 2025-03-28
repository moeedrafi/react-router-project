import { PlayerType } from "../utils/types";
import useFetch from "./useFetch";

export default function usePlayers(team: PlayerType) {
  return useFetch("/players", "POST", JSON.stringify({ team }));
}
