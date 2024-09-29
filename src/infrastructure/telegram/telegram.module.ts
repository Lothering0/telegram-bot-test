import { Module } from '@nestjs/common';
import { TelegrafDynamicModule } from './telegraf.dynamic-module';
import { StartingUpdate } from 'src/application/updates/starting/starting.update';
import { TextUpdate } from 'src/application/updates/messages/text.update';

@Module({
  imports: [TelegrafDynamicModule],
  providers: [StartingUpdate, TextUpdate],
})
export class TelegramModule {}
