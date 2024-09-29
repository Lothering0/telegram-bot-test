import { Module } from '@nestjs/common';
import { ConfigDynamicModule } from '@infrastructure/config/config.dynamic-module';
import { TelegramModule } from '@infrastructure/telegram/telegram.module';

@Module({
  imports: [ConfigDynamicModule, TelegramModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
