import { Injectable } from '@nestjs/common';

@Injectable()
export class StartingService {
  getGreetings() {
    return 'Hello! What is your name?';
  }
}
