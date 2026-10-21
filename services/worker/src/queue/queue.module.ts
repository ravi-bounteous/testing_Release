import { Module } from '@nestjs/common';
import { InMemoryMessageQueue } from './in-memory-message-queue';
import { MessageQueue } from './message-queue';

@Module({
  providers: [{ provide: MessageQueue, useClass: InMemoryMessageQueue }],
  exports: [MessageQueue],
})
export class QueueModule {}
