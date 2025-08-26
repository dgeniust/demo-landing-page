export interface Career {
    id: string;
    image: string;
    position: string;
    company: string;
    salary: string;
    level: string;
    location: string;
    skills: string[];
    postDate: Date;
    isBookmarked?: boolean;
}
