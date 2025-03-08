import { Injectable } from '@nestjs/common';
import { CreateRebanhoDto } from './dto/create-rebanho.dto';
import { UpdateRebanhoDto } from './dto/update-rebanho.dto';
import { Rebanho } from './entities/rebanho.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RebanhosService {

   constructor(
      @InjectRepository(Rebanho)
      private RebanhoRepository: Repository<Rebanho>,
    ) {}
  create(createRebanhoDto: CreateRebanhoDto) {
    return 'This action adds a new rebanho';
  }

 findAll(): Promise<Rebanho[]> {
    return this.RebanhoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} rebanho`;
  }

  update(id: number, updateRebanhoDto: UpdateRebanhoDto) {
    return `This action updates a #${id} rebanho`;
  }

  remove(id: number) {
    return `This action removes a #${id} rebanho`;
  }
}
