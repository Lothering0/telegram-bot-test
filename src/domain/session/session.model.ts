import { CreateSessionDto } from './create-session.dto';
import { Sessionable } from './sessionable.interface';

export class SessionModel {
  userName: string;

  private static isInstance(value: any): value is SessionModel {
    return value instanceof SessionModel;
  }

  constructor(dto: CreateSessionDto) {
    this.userName = dto.userName;
  }

  injectTo(object: Sessionable): SessionModel {
    if (SessionModel.isInstance(object)) {
      return object.session;
    }

    object.session = this;
    return object.session;
  }
}
