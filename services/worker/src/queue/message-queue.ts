export interface QueueMessage<T = unknown> {
  id: string;
  type: string;
  payload: T;
}

export type MessageHandler = (message: QueueMessage) => Promise<void>;

export abstract class MessageQueue {
  abstract publish(message: QueueMessage): Promise<void>;
  abstract subscribe(handler: MessageHandler): void;
}
