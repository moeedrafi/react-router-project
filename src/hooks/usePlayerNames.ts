import { Player } from "../utils/types";
import useFetch from "./useFetch";

export default function usePlayerNames(team: Player) {
  return useFetch("/players?filter=names", "POST", JSON.stringify({ team }));
}
