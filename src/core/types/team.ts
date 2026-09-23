import {TeamStats} from "./stats";
export interface Player {
    id: string;
    firstName: string;
    lastName: string;
    level: number;
} // will be in future

export interface Team {
    id: string;
    name: string;
    level: number;
    players: Player[];
    stats: TeamStats;
}