import { Injectable } from '@nestjs/common';
import { CreateJeonDto } from './dto/create-jeon.dto';
import { UpdateJeonDto } from './dto/update-jeon.dto';

@Injectable()
export class JeonService {
  create(createJeonDto: CreateJeonDto) {
    return 'This action adds a new jeon';
  }

  findAll() {
    return `This action returns all jeon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jeon`;
  }

  update(id: number, updateJeonDto: UpdateJeonDto) {
    return `This action updates a #${id} jeon`;
  }

  remove(id: number) {
    return `This action removes a #${id} jeon`;
  }
}
