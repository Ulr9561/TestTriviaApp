export interface Quiz {
    id: string;
    name: string;
    duration: string;
    category: Categories[] | Categories;
    questions: Question[];
    questions_number: string;
    level: string;
    tags: string[];
    created_at: string;
    updated_at: string;
    user_id: string;
}

export interface Question {
    _id: string;
    description: string;
    options: string[];
    answer: string;
    created_at: string;
    updated_at: string;
    quiz: string | null;
}

export enum Categories {
    GENERAL = 'General',
    SCIENCE = 'Science',
    SPORTS = 'Sports',
    GAMING = 'GAMING',
    ARTS = 'Arts',
    ANIME = 'Anime',
    INFORMATIQUE = 'Informatique',
    DEVINETTES = 'Devinettes',
}
