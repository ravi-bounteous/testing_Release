import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.createApplicationContext(AppModule);
  app.enableShutdownHooks();

  // A standalone context holds no sockets, so keep the event loop alive until shutdown.
  const keepAlive = setInterval(() => undefined, 60_000);
  process.once('beforeExit', () => clearInterval(keepAlive));
  for (const signal of ['SIGINT', 'SIGTERM'] as const) {
    process.once(signal, () => {
      clearInterval(keepAlive);
    });
  }

  new Logger('Bootstrap').log('worker started');
}

void bootstrap();
