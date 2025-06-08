import { BookResponseDTO, CreateBookDTO} from "../dto/BookDTO";

export interface IBookService {
    createBook(createBookDTO: CreateBookDTO): Promise<BookResponseDTO>;
    findAll(): Promise<BookResponseDTO[]>;
    findOne(id: number): Promise<BookResponseDTO>;
    update(id: number, createBookDTO: CreateBookDTO): Promise<BookResponseDTO>;
    delete(id: number): Promise<void>;
}

