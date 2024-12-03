import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SobreModule } from './sobre/sobre.module';

@Module({
  imports: [SobreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
