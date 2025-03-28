import useFetch from "./useFetch";

export default function usePlayer(player: string) {
  return useFetch(`/players/${player}`, "POST");
}
