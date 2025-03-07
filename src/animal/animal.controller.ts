import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UsePipes, ValidationPipe, Redirect } from '@nestjs/common';
import { Home } from 'src/home/entities/home.entity';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()

  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return await this.animalService.create(createAnimalDto);
  }

  @Get()
  @Render('animal')
  async findAll() {
    const Animais = await this.animalService.findAll()
    const AnimaisFormamtados = Animais.map(Animal => ({
      CodigoBrinco: Animal.CodigoBrinco,
      Raca: Animal.Raca,
      Peso: Animal.Peso,
      Sexo: Animal.Sexo,
      Idade: Animal.Idade
    }))
  
    return {Animais:AnimaisFormamtados };

  }



}
