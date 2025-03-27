import { Player } from "../utils/types";
import useFetch from "./useFetch";

export default function usePlayer(player: Player) {
  return useFetch(`/players/${player}`, "POST");
}
