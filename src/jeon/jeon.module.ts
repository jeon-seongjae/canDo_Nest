import { Module } from '@nestjs/common';
import { JeonService } from './jeon.service';
import { JeonController } from './jeon.controller';

@Module({
  controllers: [JeonController],
  providers: [JeonService]
})
export class JeonModule {}
