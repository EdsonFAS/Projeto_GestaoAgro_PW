import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Repository,DeepPartial  } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Animal } from './entities/animal.entity';


@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private AnimalRepository: Repository<Animal>,
  ) {}


  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const animal = this.AnimalRepository.create(createAnimalDto);
    return await this.AnimalRepository.save(animal);
  }
  findAll(): Promise<Animal[]> {
    return this.AnimalRepository.find();
  }
}
