import { Module } from '@nestjs/common';
import { JobsModule } from './jobs/jobs.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [QueueModule, JobsModule],
})
export class AppModule {}
