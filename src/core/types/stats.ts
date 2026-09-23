export interface TeamStats {
    win: number;
    draw: number;
    lose: number;
    points: number;
    goalsScored: number;
    goalsConceded: number
    goalsDifference: number;
    firstPlace: number;
    secondPlace: number;
    thirdPlace: number;
}

export interface TournamentTeamStats {
    win: number;
    draw: number;
    lose: number;
    points: number;
    goalsScored: number;
    goalsConceded: number
    goalsDifference: number;
    position?: number;
}