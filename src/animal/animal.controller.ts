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
    async create(@Body() body: { CodigoBrinco: String, Raca: string, Peso: number, Sexo: string, Idade: number }): Promise<Animal> {
    console.log(body)
    return await this.animalService.createAnimal(body.CodigoBrinco, body.Raca, body.Peso, body.Sexo, body.Idade);
  }

  @Get()
  @Render('home')
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
