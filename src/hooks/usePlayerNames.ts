import { Teams } from "../utils/types";
import useFetch from "./useFetch";

export default function usePlayerNames(team: Teams): {
  loading: boolean;
  response: string[] | null;
} {
  return useFetch("/players?filter=names", "POST", JSON.stringify({ team }));
}
