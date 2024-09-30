import { Module } from '@nestjs/common';
import { StartingUpdate } from './starting.update';
import { StartingService } from '@domain/starting/starting.service';

@Module({
  providers: [StartingService, StartingUpdate],
})
export class StartingModule {}
