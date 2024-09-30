import { Injectable } from '@nestjs/common';

@Injectable()
export class StartingService {
  getGreetings() {
    return 'Добрый день! Как Вас зовут?';
  }
}
