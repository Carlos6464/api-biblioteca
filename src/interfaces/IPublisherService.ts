import { CreatePublisherDTO, PublishResponseDTO} from '../dto/PublisherDTO';

export interface IPublisherService {
    createPublisher(createPublisherDTO: CreatePublisherDTO): Promise<PublishResponseDTO>;
    findAll(): Promise<PublishResponseDTO[]>
    findOne(id: number): Promise<PublishResponseDTO>
    update(id: number, createPublisherDTO: CreatePublisherDTO): Promise<PublishResponseDTO>
    delete(id: number): Promise<void>
}