import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeRateService {
  getCurrentRateFor(userName: string) {
    return `Рад знакомству, ${userName}! Курс доллара сегодня - 100 ₽`;
  }
}
