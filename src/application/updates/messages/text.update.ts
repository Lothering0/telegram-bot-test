import { ExchangeRateService } from '@domain/exchange-rate/exchange-rate.service';
import { Context } from '@infrastructure/context.interface';
import { Ctx, InjectBot, Message, On, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

@Update()
export class TextUpdate extends Telegraf<Context> {
  constructor(
    @InjectBot() bot: Telegraf<Context>,
    private readonly exchangeRateService: ExchangeRateService,
  ) {
    const { token, options } = bot.telegram;
    super(token, options as any);
  }

  @On('text')
  async handleStart(@Message('text') userName: string, @Ctx() context: Context) {
    const currentRate = await this.exchangeRateService.getCurrentRateFor(userName);
    context.reply(currentRate);
  }
}
