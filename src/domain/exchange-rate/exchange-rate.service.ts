import { ExchangeRateApi } from '@infrastructure/exchange-rate/exchange-rate-api.interface';
import { EXCHANGE_RATE_INJECTION_TOKEN } from '@infrastructure/exchange-rate/exchange-rate.injection-token';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeRateService {
  constructor(@Inject(EXCHANGE_RATE_INJECTION_TOKEN) private readonly exchangeRateApi: ExchangeRateApi) {}

  async getCurrentRateFor(userName: string) {
    const rate = await this.exchangeRateApi.fetchRateRubToUsd();
    return `Рад знакомству, ${userName}! Курс доллара сегодня - ${rate} ₽`;
  }
}
