export interface Answer {
    id: number;
    text: string;
}

export interface Question {
    id: number;
    text: string;
    answers: Answer[];
    correctAnswer: number;
}

export type RootStackParamList = {
    home: undefined;
    quiz: undefined;
    leaderboard: undefined;
};
