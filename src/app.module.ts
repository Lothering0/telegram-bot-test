import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TelegramModule } from './infrastructure/telegram/telegram.module';
import { ConfigDynamicModule } from './infrastructure/config/config.dynamic-module';

@Module({
  imports: [ConfigDynamicModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
