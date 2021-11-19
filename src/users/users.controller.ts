import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(MorganInterceptor('common'))
  @Get() // 여기 데코레이터 가로안에 주소 지정하면 세부주소 abc/jeon
  getUsers(): string {
    return this.usersService.getHello();
  }

  @UseInterceptors(MorganInterceptor('common'))
  @Post()
  Signup(): string {
    return this.usersService.postHello();
  }

  @UseInterceptors(MorganInterceptor('common'))
  @Post('login')
  Login(): string {
    return this.usersService.postHello();
  }

  @UseInterceptors(MorganInterceptor('common'))
  @Post('logout')
  Logout(): string {
    return this.usersService.postHello();
  }
}
