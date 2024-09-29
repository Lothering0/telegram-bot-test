import { Ctx, Message, On, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Update()
export class TextUpdate extends Telegraf<Context> {
  @On('text')
  handleStart(@Message('text') message: string, @Ctx() context: Context) {
    context.reply(message);
  }
}
