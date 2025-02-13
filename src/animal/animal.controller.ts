import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { Home } from 'src/home/entities/home.entity';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  create(@Body() body: { CodigoBrinco: number, Raca: string, Peso: number, Sexo: string, Idade: number }): Promise<Animal> {
    return this.animalService.createAnimal(body.CodigoBrinco, body.Raca, body.Peso, body.Sexo, body.Idade);
  }

  @Get()
  @Render('home')
  findAll(): Promise<Animal[]> {
    return this.animalService.findAll();
  }



}
