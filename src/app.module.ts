import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvendReadModule } from './modules/event-read/event-read.module';

@Module({
  imports: [EventEmitterModule.forRoot(), EvendReadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
