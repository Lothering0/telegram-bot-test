import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TelegramDynamicModule } from './infrastructure/telegram/telegram.dynamic-module';
import { ConfigDynamicModule } from './infrastructure/config/config.dynamic-module';

@Module({
  imports: [ConfigDynamicModule, TelegramDynamicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
