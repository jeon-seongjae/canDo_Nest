import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MorganModule } from 'nest-morgan';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { JeonModule } from './jeon/jeon.module';

@Module({
  imports: [ConfigModule.forRoot(), MorganModule, UsersModule, DatabaseModule, JeonModule], // 이렇게 뒤에 forRoot() 같은게 붙는 애들은 설정을 할 수 있다는 거임
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
