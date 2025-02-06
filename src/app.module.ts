import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SobreModule } from './sobre/sobre.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

@Module({
  imports: [SobreModule, LoginModule, HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
