export interface Match {
    id: string;
    round?: number;
    group?: string;
    homeTeamId: string;
    awayTeamId: string;
    homeScore?: number;
    awayScore?: number;
    winnerId?: string;
}
