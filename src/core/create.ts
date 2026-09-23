import type {Team, Group, League, Playoff } from "@types";

export function createGroup(name: string, teams: Team[], teamsPerGroup: number,  roundsCount: 1 | 2): Group {
    return {
        id: crypto.randomUUID(),
        name: name,
        teams: [...teams],
        matches: [],
        teamsPerGroup: teamsPerGroup,
        roundsCount: roundsCount,
    };
}

export function createLeague(name: string, teams: Team[], roundsCount: 1 | 2) : League {
    return {
        id: crypto.randomUUID(),
        name: name,
        teams: [...teams],
        matches: [],
        roundsCount: roundsCount,
    }
}

export function createPlayoff(name: string, teams: Team[], roundsCount: 1 | 2, stage: 4 | 8 | 16 | 32): Playoff {
    return {
        id: crypto.randomUUID(),
        name: name,
        teams: [...teams],
        matches: [],
        roundsCount: roundsCount,
        stage: stage,
    };
}
