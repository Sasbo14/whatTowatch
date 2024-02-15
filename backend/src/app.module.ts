import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "./entities/user.entity";
import { FirebaseService } from './firebase/firebase.service';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
          username: 'root',
          password: 'root',
          database: 'whattowatch',
          entities: [User],
          synchronize: true, // Utilisez `false` en production
      })
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
