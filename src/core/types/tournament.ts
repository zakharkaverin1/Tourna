import {Team} from "./team";
import {Match} from "./match";

export interface League {
    id: string;
    name: string;
    teams: Team[];
    matches: Match[];
    roundsCount: 1 | 2;
}

export interface Group {
    id: string;
    name: string;
    teams: Team[];
    matches: Match[];
    roundsCount: 1 | 2;
    teamsPerGroup: number;
}

export interface Playoff {
    id: string;
    name: string;
    teams: Team[];
    matches: Match[];
    roundsCount: 1 | 2;
    stage: 4 | 8 | 16 | 32;
}

export type TournamentTypes  = League | Group | Playoff;