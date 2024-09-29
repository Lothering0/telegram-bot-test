import { SessionModel } from '@domain/session/session.model';
import { Context } from '@infrastructure/context.interface';
import { Ctx, Message, On, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

@Update()
export class TextUpdate extends Telegraf<Context> {
  @On('text')
  handleStart(@Message('text') message: string, @Ctx() context: Context) {
    const session = new SessionModel({ userName: message }).injectTo(context);
    context.reply(`Рад знакомству, ${session.userName}! Курс доллара сегодня - 100 ₽`);
  }
}
