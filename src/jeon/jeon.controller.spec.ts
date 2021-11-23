import { Test, TestingModule } from '@nestjs/testing';
import { JeonController } from './jeon.controller';
import { JeonService } from './jeon.service';

describe('JeonController', () => {
  let controller: JeonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JeonController],
      providers: [JeonService],
    }).compile();

    controller = module.get<JeonController>(JeonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
