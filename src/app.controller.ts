import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { MorganInterceptor } from 'nest-morgan';
import { AppService } from './app.service';

@Controller() // 여기 데코레이터 가로안에 주소 지정하면 공통주소 'abc'
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseInterceptors(MorganInterceptor('common'))
  @Get() // 여기 데코레이터 가로안에 주소 지정하면 세부주소 abc/jeon
  getHello(): string {
    return this.appService.getHello();
  }
}
