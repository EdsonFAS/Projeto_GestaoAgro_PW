import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Animal } from './entities/animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private AnimalRepository: Repository<Animal>,
  ) {}

  async createAnimal(CodigoBrinco: number, Raca: string, Peso: number, Sexo: string, Idade: number): Promise<Animal> {
    const animal = new Animal();
    animal.CodigoBrinco;
    animal.Raca;
    animal.Peso;
    animal.Sexo;
    animal.Idade;
    return this.AnimalRepository.save(animal);
  }

  async findAll(): Promise<Animal[]> {
    return this.AnimalRepository.find();
  }
}
