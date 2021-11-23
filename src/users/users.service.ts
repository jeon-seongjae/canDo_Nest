import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHello(): string {
    return process.env.SECRET;
  }

  postSignUp(emali: string, nickname: string, password: string): string {
    return process.env.SECRET;
  }

  postLogIn(): string {
    return process.env.SECRET;
  }

  postLogOut(): string {
    return process.env.SECRET;
  }
}
