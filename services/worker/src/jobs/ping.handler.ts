import { Injectable, Logger } from '@nestjs/common';
import { QueueMessage } from '../queue/message-queue';
import { JobHandler } from './job-handler';

@Injectable()
export class PingHandler implements JobHandler {
  readonly type = 'worker.ping';
  private readonly logger = new Logger(PingHandler.name);

  async handle(message: QueueMessage): Promise<void> {
    this.logger.log(`ping received (${message.id})`);
  }
}
