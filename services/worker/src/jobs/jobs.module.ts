import { Module } from '@nestjs/common';
import { QueueModule } from '../queue/queue.module';
import { JOB_HANDLERS } from './job-handler';
import { JobDispatcher } from './job-dispatcher.service';
import { PingHandler } from './ping.handler';

@Module({
  imports: [QueueModule],
  providers: [
    PingHandler,
    { provide: JOB_HANDLERS, useFactory: (ping: PingHandler) => [ping], inject: [PingHandler] },
    JobDispatcher,
  ],
  exports: [PingHandler],
})
export class JobsModule {}
