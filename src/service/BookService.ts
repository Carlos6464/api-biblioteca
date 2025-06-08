import {prisma} from '../prisma';
import { IBookService } from '../interfaces/IBookService';
import { CreateBookDTO, BookResponseDTO } from '../dto/BookDTO';

export class BookService implements IBookService {

    async createBook(createBookDTO: CreateBookDTO): Promise<BookResponseDTO> {
        const book = await prisma.book.create({
            data: {
                title: createBookDTO.title,
                author: createBookDTO.author,
                isbn: createBookDTO.isbn,
                publisherId: createBookDTO.publisherId
            }
        });
        return {
            id: book.id,
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publisherId: book.publisherId
        };
    }

    async findAll(): Promise<BookResponseDTO[]> {
        return await prisma.book.findMany();
    }

    async findOne(id: number): Promise<BookResponseDTO> {
        const book = await prisma.book.findUnique({
            where: {
                id: id
            }
        });

        if (!book) {
            throw new Error(`Book with ID ${id} not found`);
        }
        
        return {
            id: book.id,
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publisherId: book.publisherId
        };
    }

    async update(id: number, createBookDTO: CreateBookDTO): Promise<BookResponseDTO> {
        const book = await prisma.book.update({
            where: {
                id: id
            },
            data: {
                title: createBookDTO.title,
                author: createBookDTO.author,
                isbn: createBookDTO.isbn,
                publisherId: createBookDTO.publisherId
            }
        });
        return {
            id: book.id,
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publisherId: book.publisherId
        };
    }

    async delete(id: number): Promise<void> {
        await prisma.book.delete({
            where: {
                id: id
            }
        });
    }
}