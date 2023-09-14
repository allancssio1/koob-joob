import { Module } from '@nestjs/common';
import { InMemoryUser } from './InMemoryUser.service';

@Module({
  providers: [InMemoryUser],
  exports: [InMemoryUser],
})
export class InMemoryModule {}
