import { Config } from '@infrastructure/config/config.interface';
import { ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';

export const TelegrafDynamicModule = TelegrafModule.forRootAsync({
  useFactory: (configService: ConfigService<Config>) => ({
    token: configService.get('TELEGRAM_BOT_API_TOKEN'),
  }),
  inject: [ConfigService],
});
