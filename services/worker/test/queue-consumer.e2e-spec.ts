import 'reflect-metadata';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { PingHandler } from '../src/jobs/ping.handler';
import { MessageQueue } from '../src/queue/message-queue';

describe('queue consumer (e2e)', () => {
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    await moduleRef.init();
  });

  afterAll(async () => {
    await moduleRef.close();
  });

  it('consumes a published message and runs its handler', async () => {
    const ping = moduleRef.get(PingHandler);
    const spy = jest.spyOn(ping, 'handle');

    await moduleRef.get(MessageQueue).publish({ id: 'm-1', type: 'worker.ping', payload: {} });

    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ id: 'm-1' }));
  });
});
