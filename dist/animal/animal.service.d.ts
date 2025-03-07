import { CreateAnimalDto } from './dto/create-animal.dto';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
export declare class AnimalService {
    private AnimalRepository;
    constructor(AnimalRepository: Repository<Animal>);
    create(createAnimalDto: CreateAnimalDto): Promise<Animal>;
    findAll(): Promise<Animal[]>;
}
