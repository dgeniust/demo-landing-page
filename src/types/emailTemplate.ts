export interface EmailTemplate {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    content: string;
    difficulty: 'Dễ' | 'Trung bình' | 'Khó';
    usage: string;
};