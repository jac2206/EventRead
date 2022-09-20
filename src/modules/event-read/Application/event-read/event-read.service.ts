import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EventReadService {
    getEventRead():string{
        return 'Read event';
    }

    @OnEvent('msg.sent3')
    listentToEvent(msg: string) {
        console.log('Message Received: ', msg);
    }

    handleEventRead(data: string) {
        console.log(data);
    }

}
