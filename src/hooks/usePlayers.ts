import useFetch from "./useFetch";

interface PlayersProps {
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

export default function usePlayers(team: PlayersProps) {
  return useFetch("/players", "POST", JSON.stringify({ team }));
}
