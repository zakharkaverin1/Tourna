import type {Match, Team} from "@types";

export function addTeam<T extends {teams: Team[]}>(tournament: T, team: Team): T {
    return {
        ...tournament,
        teams: [...tournament.teams, team],
    };
}

export function removeTeam<T extends {teams: Team[]}>(tournament: T, teamId: string): T {
    return {
        ...tournament,
        teams: tournament.teams.filter(team => team.id !== teamId),
    };
}

export function addMatch<T extends {matches: Match[]}>(tournament: T, match: Match): T {
    return {
        ...tournament,
        matches: [...tournament.matches, match],
    };
}

export function removeMatch<T extends {matches: Match[]}>(tournament: T, matchId: string): T {
    return {
        ...tournament,
        matches: tournament.matches.filter(match => match.id !== matchId),
    };
}

export function updateMatchTeams<T extends {matches: Match[]}>
    (tournament: T, matchId: string, homeTeamId: string, awayTeamId: string ): T {
    return {
        ...tournament,
        matches: tournament.matches.map(match => match.id === matchId
                ? { ...match, homeTeamId, awayTeamId, homeScore: undefined,awayScore: undefined, winnerId: undefined }
                : match
        ),
    };
}

export function updateMatchScore<T extends { matches: Match[] }>(
    tournament: T, matchId: string, homeScore: number, awayScore: number):  T {
    return {
        ...tournament,
        matches: tournament.matches.map(match => {
            if (match.id !== matchId) return match;
            const winnerId =
                homeScore > awayScore ? match.homeTeamId :
                    awayScore > homeScore ? match.awayTeamId :
                        undefined; // ЗАМЕНИТЬ НА ФУНКЦИЮ getWinner
            return { ...match, homeScore, awayScore, winnerId };
        }),
    };
}