import { AnimalService } from './animal.service';
import { Animal } from './entities/animal.entity';
export declare class AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    create(body: {
        CodigoBrinco: String;
        Raca: string;
        Peso: number;
        Sexo: string;
        Idade: number;
    }): Promise<Animal>;
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
