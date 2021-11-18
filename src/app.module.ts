import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MorganModule } from 'nest-morgan';

@Module({
  imports: [ConfigModule.forRoot(), MorganModule], // 이렇게 뒤에 forRoot() 같은게 붙는 애들은 설정을 할 수 있다는 거임
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
