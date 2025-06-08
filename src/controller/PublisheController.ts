import {Request, Response} from "express";
import { IPublisherService } from "../interfaces/IPublisherService";
import { CreatePublisherDTO } from "../dto/PublisherDTO";

export class PublisherController {
    constructor(private publisherService: IPublisherService) {}
    
    create = async (req: Request, res: Response) => {
        const createPublisherDTO: CreatePublisherDTO = req.body;
        try {
            const publisher = await this.publisherService.createPublisher(createPublisherDTO);
            res.status(201).json(publisher); 
        } catch (error) {
            res.status(400).json({ error: "Erro ao criar editora" });
        }
    };

    findAll = async (req: Request, res: Response) => {
        const publishers = await this.publisherService.findAll();
        res.status(200).json(publishers);
    };

    findOne = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const publisher = await this.publisherService.findOne(id);
            res.status(200).json(publisher);
        } catch (error) {
            res.status(404).json({ error: "Editora não encontrada" });
        }
    };

    update = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const createPublisherDTO: CreatePublisherDTO = req.body;
        try {
            const publisher = await this.publisherService.update(id, createPublisherDTO);
            res.status(200).json(publisher);
        } catch (error) {
            res.status(404).json({ error: "Editora não encontrada" });
        }
    };

    delete = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            await this.publisherService.delete(id);
            res.status(200).json({ message: "Editora excluída com sucesso" });
        } catch (error) {
            res.status(404).json({ error: "Editora não encontrada" });
        }
    };

}