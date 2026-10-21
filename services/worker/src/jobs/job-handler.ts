import { QueueMessage } from '../queue/message-queue';

export interface JobHandler {
  readonly type: string;
  handle(message: QueueMessage): Promise<void>;
}

export const JOB_HANDLERS = Symbol('JOB_HANDLERS');
