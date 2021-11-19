import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHello(): string {
    return process.env.SECRET;
  }

  postHello(): string {
    return process.env.SECRET;
  }
}
