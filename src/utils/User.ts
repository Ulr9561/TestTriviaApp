export default interface User {
    id: string;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface Profile {
    id: string;
    achievements: Array<string>;
    rank: string;
    score: number | 0;
    solved_quizzes: number | 0;
    user_id: string;
    created_at: string,
    updated_at: string
}
