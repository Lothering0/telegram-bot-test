import { Provider } from '@nestjs/common';
import { ExchangeRateApi } from './exchange-rate-api.interface';
import { CbrXmlDailyApi } from './cbr-xml-daily.api';
import { EXCHANGE_RATE_INJECTION_TOKEN } from './exchange-rate.injection-token';

export const exchangeRateApiProvider: Provider<ExchangeRateApi> = {
  provide: EXCHANGE_RATE_INJECTION_TOKEN,
  useClass: CbrXmlDailyApi,
};
