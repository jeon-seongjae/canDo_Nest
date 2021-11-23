import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(MorganInterceptor('common'))
  @ApiOkResponse({
    type: UserDto,
  })
  @ApiResponse({
    status: 500,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get() // 여기 데코레이터 가로안에 주소 지정하면 세부주소 abc/jeon
  getUsers(@User() user) {
    return user;
  }

  @UseInterceptors(MorganInterceptor('common'))
  @ApiOperation({ summary: '회원가입' })
  @Post()
  signUp(@Body() data: JoinRequestDto) {
    return this.usersService.postSignUp(
      data.email,
      data.nickname,
      data.password,
    );
  }

  @UseInterceptors(MorganInterceptor('common'))
  @ApiOperation({ summary: '로그인' })
  @ApiOkResponse({
    // 알아서 status 200이 된다
    description: '성공',
    type: UserDto,
  })
  @Post('login')
  logIn(@User() user) {
    return user;
  }

  @UseInterceptors(MorganInterceptor('common'))
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req, @Res() res): any {
    req.logOut();
    res.send('OK');
  }
}
