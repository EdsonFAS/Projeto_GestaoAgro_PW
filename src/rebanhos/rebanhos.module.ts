import { Module } from '@nestjs/common';
import { RebanhosService } from './rebanhos.service';
import { RebanhosController } from './rebanhos.controller';

@Module({
  controllers: [RebanhosController],
  providers: [RebanhosService],
})
export class RebanhosModule {}
