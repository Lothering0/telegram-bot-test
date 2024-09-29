import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Update()
export class StartingUpdate extends Telegraf<Context> {
  @Start()
  handleStart(@Ctx() context: Context) {
    context.reply(String(context.from.id));
  }
}
