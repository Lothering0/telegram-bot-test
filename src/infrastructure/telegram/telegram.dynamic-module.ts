import { ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { Config } from '../config/config.interface';

export const TelegramDynamicModule = TelegrafModule.forRootAsync({
  useFactory(configService: ConfigService<Config>) {
    return { token: configService.get('TELEGRAM_BOT_API_TOKEN') };
  },
  inject: [ConfigService],
});
