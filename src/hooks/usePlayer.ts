import useFetch from "./useFetch";

interface PlayerProps {
  name: string;
  position: string;
  teamId: string;
  number: number;
  avatar: string;
  rpg: number;
  spg: number;
  apg: number;
  ppg: number;
  id: string;
}

export default function usePlayer(player: PlayerProps) {
  return useFetch(`/players/${player}`, "POST");
}
