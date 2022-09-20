import { Module } from '@nestjs/common';
import { EventReadService } from './Application/event-read/event-read.service';
import { EventReadController } from './Infrastructure/Controller/event-read/event-read.controller';

@Module({
    imports: [],
    controllers: [EventReadController],
    providers: [EventReadService],
})
export class EvendReadModule {}
