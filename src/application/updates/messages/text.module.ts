import { Module } from '@nestjs/common';
import { TextUpdate } from './text.update';
import { ExchangeRateService } from '@domain/exchange-rate/exchange-rate.service';

@Module({
  providers: [ExchangeRateService, TextUpdate],
})
export class TextModule {}
