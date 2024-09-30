import { Module } from '@nestjs/common';
import { TelegrafDynamicModule } from './telegraf.dynamic-module';
import { TextModule } from '@application/updates/messages/text.module';
import { StartingModule } from '@application/updates/starting/starting.module';

@Module({
  imports: [TelegrafDynamicModule, StartingModule, TextModule],
  providers: [],
})
export class TelegramModule {}
