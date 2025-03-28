export type TeamsType = "bulls" | "foxes" | "hedgehogs" | "koalas" | "lemurs";

export interface Article {
  id: string;
  title: string;
  date: Date;
}

export interface PlayerType {
  name: string;
  position: string;
  teamId: TeamsType;
  number: number;
  avatar: string;
  rpg: number;
  spg: number;
  apg: number;
  ppg: number;
  id: string;
}

export interface TeamType {
  id: TeamsType;
  name: string;
  wins: number;
  losses: number;
  established: number;
  coach: string;
  manager: string;
  championships: number[];
  players: PlayerType[];
}
