import {prisma} from '../prisma';
import { IPublisherService } from '../interfaces/IPublisherService';
import { CreatePublisherDTO, PublishResponseDTO } from '../dto/PublisherDTO';

export class PublisherService implements IPublisherService {

    async createPublisher(createPublisherDTO: CreatePublisherDTO): Promise<PublishResponseDTO> {
        const publisher = await prisma.publisher.create({
            data: {
                name: createPublisherDTO.name
            }
        });
        return {
            id: publisher.id,
            name: publisher.name
        };
    }

    async findAll(): Promise<PublishResponseDTO[]> {
       return  await prisma.publisher.findMany();    
    }

    async findOne(id: number): Promise<PublishResponseDTO> {
        const publisher = await prisma.publisher.findUnique({
            where: { id }
        });

        if (!publisher) {
            throw new Error(`Publisher with ID ${id} not found`);
        }

        return {
            id: publisher.id,
            name: publisher.name
        };
    }

    async update(id: number, createPublisherDTO: CreatePublisherDTO): Promise<PublishResponseDTO> {
        const publisher = await prisma.publisher.update({
            where: {
                id: id
            },
            data: {
                name: createPublisherDTO.name
            }
        });
        return {
            id: publisher.id,
            name: publisher.name
        };
    }

    async delete(id: number): Promise<void> {
        await prisma.publisher.delete({
            where: {
                id: id
            }
        });
    }
}