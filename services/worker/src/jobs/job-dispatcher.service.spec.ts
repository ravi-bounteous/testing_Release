import { JobDispatcher } from './job-dispatcher.service';
import { JobHandler } from './job-handler';
import { InMemoryMessageQueue } from '../queue/in-memory-message-queue';

describe('JobDispatcher', () => {
  it('routes a message to the handler registered for its type', async () => {
    const handle = jest.fn().mockResolvedValue(undefined);
    const handler: JobHandler = { type: 'a', handle };
    const dispatcher = new JobDispatcher(new InMemoryMessageQueue(), [handler]);

    await dispatcher.dispatch({ id: '1', type: 'a', payload: {} });

    expect(handle).toHaveBeenCalledTimes(1);
  });

  it('ignores messages with no registered handler', async () => {
    const handle = jest.fn();
    const dispatcher = new JobDispatcher(new InMemoryMessageQueue(), [{ type: 'a', handle }]);

    await expect(dispatcher.dispatch({ id: '1', type: 'other', payload: {} })).resolves.toBeUndefined();
    expect(handle).not.toHaveBeenCalled();
  });
});
