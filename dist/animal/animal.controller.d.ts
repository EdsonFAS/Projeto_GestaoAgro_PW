import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
export declare class AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    create(createAnimalDto: CreateAnimalDto): Promise<import("./entities/animal.entity").Animal>;
    findAll(): Promise<{
        Animais: {
            CodigoBrinco: String;
            Raca: string;
            Peso: number;
            Sexo: string;
            Idade: number;
        }[];
    }>;
    update(CodigoBrinco: string, updateAnimalDto: UpdateAnimalDto): Promise<string>;
    delete(CodigoBrinco: string): Promise<string>;
}
