import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { RebanhosService } from './rebanhos.service';
import { CreateRebanhoDto } from './dto/create-rebanho.dto';
import { UpdateRebanhoDto } from './dto/update-rebanho.dto';

@Controller('rebanhos')
export class RebanhosController {
  constructor(private readonly rebanhosService: RebanhosService) {}

  @Post()
  create(@Body() createRebanhoDto: CreateRebanhoDto) {
  
  }

  @Get()
  @Render("rebanhos")
  findAll() {
    
  }


}
