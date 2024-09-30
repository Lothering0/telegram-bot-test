import { type Context as TelegrafContext } from 'telegraf';
import type { Update } from 'telegraf/types';

export type Context<U extends Update = Update> = TelegrafContext<U>;
