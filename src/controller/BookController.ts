import { Request, Response } from "express";
import { IBookService } from "../interfaces/IBookService";
import { CreateBookDTO, BookResponseDTO} from "../dto/BookDTO";


export class BookController {
    constructor(private bookService: IBookService) {}
    create = async (req: Request, res: Response) => {
        const createBookDTO: CreateBookDTO = req.body;
        try {
            const book = await this.bookService.createBook(createBookDTO);
            res.status(201).json(book); 
        } catch (error) {
            res.status(400).json({ error: "Erro ao criar livro" });
        }
    }

    findAll = async (req: Request, res: Response) => {
        const books = await this.bookService.findAll();
        res.status(200).json(books);
    }

    findOne = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const book = await this.bookService.findOne(id);
            res.status(200).json(book);
        } catch (error) {
            res.status(404).json({ error: "Livro não encontrado" });
        }
    }

    update = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const createBookDTO: CreateBookDTO = req.body;
        try {
            const book = await this.bookService.update(id, createBookDTO);
            res.status(200).json(book);
        } catch (error) {
            res.status(404).json({ error: "Livro não encontrado" });
        }
    }
    
    delete = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            await this.bookService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(404).json({ error: "Livro não encontrado" });
        }
    }
}