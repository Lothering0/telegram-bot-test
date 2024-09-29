import { Context } from '@infrastructure/context.interface';
import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

@Update()
export class StartingUpdate extends Telegraf<Context> {
  @Start()
  handleStart(@Ctx() context: Context) {
    context.reply('Добрый день! Как Вас зовут?');
  }
}
