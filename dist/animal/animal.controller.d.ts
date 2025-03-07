import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { Animal } from './entities/animal.entity';
export declare class AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    create(createAnimalDto: CreateAnimalDto): Promise<Animal>;
    findAll(): Promise<{
        Animais: {
            CodigoBrinco: String;
            Raca: string;
            Peso: number;
            Sexo: string;
            Idade: number;
        }[];
    }>;
}
