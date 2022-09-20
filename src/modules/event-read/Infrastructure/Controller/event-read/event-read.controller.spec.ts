import { Test, TestingModule } from '@nestjs/testing';
import { EventReadController } from './event-read.controller';

describe('EventReadController', () => {
  let controller: EventReadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventReadController],
    }).compile();

    controller = module.get<EventReadController>(EventReadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
