import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { MessageQueue, QueueMessage } from '../queue/message-queue';
import { JOB_HANDLERS, JobHandler } from './job-handler';

@Injectable()
export class JobDispatcher implements OnModuleInit {
  private readonly logger = new Logger(JobDispatcher.name);
  private readonly handlersByType = new Map<string, JobHandler>();

  constructor(
    private readonly queue: MessageQueue,
    @Inject(JOB_HANDLERS) handlers: JobHandler[],
  ) {
    for (const handler of handlers) {
      this.handlersByType.set(handler.type, handler);
    }
  }

  onModuleInit(): void {
    this.queue.subscribe((message) => this.dispatch(message));
  }

  async dispatch(message: QueueMessage): Promise<void> {
    const handler = this.handlersByType.get(message.type);
    if (!handler) {
      this.logger.warn(`no handler for message type "${message.type}"`);
      return;
    }
    await handler.handle(message);
  }
}
