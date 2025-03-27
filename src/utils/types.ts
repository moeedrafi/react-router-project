export type Teams = "bulls" | "foxes" | "hedgehogs" | "koalas" | "lemurs";

export interface Article {
  id: string;
  title: string;
  date: Date;
}

export interface Player {
  name: string;
  position: string;
  teamId: Team;
  number: number;
  avatar: string;
  rpg: number;
  spg: number;
  apg: number;
  ppg: number;
  id: string;
}

export interface Team {
  id: Team;
  name: string;
  wins: number;
  losses: number;
  established: number;
  coach: string;
  manager: string;
  championships: number[];
  players: Player[];
}
