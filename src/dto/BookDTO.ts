export interface CreateBookDTO {
    title: string;
    author: string;
    isbn: string;
    publisherId: number;
}

export interface BookResponseDTO {
    id: number;
    title: string;
    author: string;
    isbn: string;
    publisherId: number;
}