import { Module } from '@nestjs/common';
import { TextUpdate } from './text.update';
import { ExchangeRateService } from '@domain/exchange-rate/exchange-rate.service';
import { exchangeRateApiProvider } from '@infrastructure/exchange-rate/exchange-rate-api.provider';

@Module({
  providers: [exchangeRateApiProvider, ExchangeRateService, TextUpdate],
})
export class TextModule {}
