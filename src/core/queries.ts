import type {Match, Team, TournamentTypes} from "@types";

export function getTeam(tournament: TournamentTypes, teamId: string): Team | undefined {
    return tournament.teams.find(team => team.id === teamId);
}

export function getMatch(tournament: TournamentTypes, matchId: string): Match | undefined {
    return tournament.matches.find(match => match.id === matchId);
}

    export function getTeams(tournament: TournamentTypes): Team[] {
    return [...tournament.teams];
}

export function getMatches(tournament: TournamentTypes): Match[] {
    return [...tournament.matches];
}