export interface ExchangeRateApi {
  fetchRateRubToUsd(): Promise<number>;
}
