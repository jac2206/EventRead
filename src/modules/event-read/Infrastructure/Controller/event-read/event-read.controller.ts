import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { EventReadService } from 'src/modules/event-read/Application/event-read/event-read.service';

@Controller('eventread')
export class EventReadController {
    constructor(private readonly eventReadService: EventReadService) {}

    @Get() 
    getEventRead():string{
        return this.eventReadService.getEventRead();
    }

    @EventPattern('msg.sent')
    handleEventRead(data: string) {
      this.eventReadService.handleEventRead(data);
    }
}
