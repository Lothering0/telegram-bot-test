import { Injectable } from '@nestjs/common';
import { ExchangeRateApi } from './exchange-rate-api.interface';

@Injectable()
export class CbrXmlDailyApi implements ExchangeRateApi {
  private static baseUrl = 'https://www.cbr-xml-daily.ru/latest.js';

  private fetchData() {
    return fetch(CbrXmlDailyApi.baseUrl);
  }

  private async getRates() {
    const response = await this.fetchData();
    const { rates } = await response.json();
    return rates;
  }

  async fetchRateRubToUsd() {
    const { USD } = await this.getRates();
    return this.prepareValue(1 / USD);
  }

  private prepareValue(value: number) {
    return Math.floor(value);
  }
}
