import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SobreModule } from './sobre/sobre.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalModule } from './animal/animal.module';
import { Animal } from './animal/entities/animal.entity';
import { RebanhosModule } from './rebanhos/rebanhos.module';

@Module({
  imports: [SobreModule, LoginModule, HomeModule, AnimalModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // tipo do banco de dados
      host: 'localhost', // ou o IP do seu banco
      port: 3306, // porta padrão do MySQL
      username: 'root', // usuário do banco de dados
      password: 'Edson!2Xz', // senha do banco de dados
      database: 'GestaoAgro', // nome do banco de dados
      entities: [Animal], // aqui você coloca suas entidades, pode estar vazio inicialmente
      synchronize: false, // se estiver em desenvolvimento, pode deixar como true, mas em produção, deve ser false
    })
    ,
    TypeOrmModule.forFeature([Animal]),
    RebanhosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
