import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JeonService } from './jeon.service';
import { CreateJeonDto } from './dto/create-jeon.dto';
import { UpdateJeonDto } from './dto/update-jeon.dto';

@Controller('jeon')
export class JeonController {
  constructor(private readonly jeonService: JeonService) {}

  @Post()
  create(@Body() createJeonDto: CreateJeonDto) {
    return this.jeonService.create(createJeonDto);
  }

  @Get()
  findAll() {
    return this.jeonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jeonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJeonDto: UpdateJeonDto) {
    return this.jeonService.update(+id, updateJeonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jeonService.remove(+id);
  }
}
