import { SessionModel } from '@domain/session/session.model';
import { session } from 'telegraf';

export const sessionMiddleware = session<SessionModel, any>();
