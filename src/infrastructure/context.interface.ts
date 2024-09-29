import { SessionModel } from '@domain/session/session.model';
import { type Context as TelegrafContext } from 'telegraf';
import type { Update } from 'telegraf/types';

export interface Context<U extends Update = Update> extends TelegrafContext<U> {
  session: SessionModel;
}
