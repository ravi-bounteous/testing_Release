import { Injectable } from '@nestjs/common';
import { MessageHandler, MessageQueue, QueueMessage } from './message-queue';

// Placeholder transport until the Amazon SQS adapter replaces it.
@Injectable()
export class InMemoryMessageQueue extends MessageQueue {
  private handlers: MessageHandler[] = [];

  subscribe(handler: MessageHandler): void {
    this.handlers.push(handler);
  }

  async publish(message: QueueMessage): Promise<void> {
    for (const handler of this.handlers) {
      await handler(message);
    }
  }
}
