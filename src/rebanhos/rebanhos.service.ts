import { Injectable } from '@nestjs/common';
import { CreateRebanhoDto } from './dto/create-rebanho.dto';
import { UpdateRebanhoDto } from './dto/update-rebanho.dto';

@Injectable()
export class RebanhosService {
  create(createRebanhoDto: CreateRebanhoDto) {
    return 'This action adds a new rebanho';
  }

  findAll() {
    return `This action returns all rebanhos`;
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
