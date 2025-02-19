import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
export declare class AnimalService {
    private AnimalRepository;
    constructor(AnimalRepository: Repository<Animal>);
    createAnimal(CodigoBrinco: String, Raca: string, Peso: number, Sexo: string, Idade: number): Promise<Animal>;
    findAll(): Promise<Animal[]>;
}
