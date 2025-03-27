import useFetch from "./useFetch";

interface PlayerNamesProps {
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

export default function usePlayerNames(team: PlayerNamesProps) {
  return useFetch("/players?filter=names", "POST", JSON.stringify({ team }));
}
