import { StartingService } from '@domain/starting/starting.service';
import { Context } from '@infrastructure/context.interface';
import { Ctx, InjectBot, Start, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

@Update()
export class StartingUpdate extends Telegraf<Context> {
  constructor(
    @InjectBot() bot: Telegraf<Context>,
    private readonly startingService: StartingService,
  ) {
    super(bot.telegram.token, bot.telegram.options as any);
  }

  @Start()
  handleStart(@Ctx() context: Context) {
    const greetings = this.startingService.getGreetings();
    context.reply(greetings);
  }
}
