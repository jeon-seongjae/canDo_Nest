import { Test, TestingModule } from '@nestjs/testing';
import { JeonService } from './jeon.service';

describe('JeonService', () => {
  let service: JeonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JeonService],
    }).compile();

    service = module.get<JeonService>(JeonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
