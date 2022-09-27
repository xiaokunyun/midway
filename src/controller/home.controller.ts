import { Controller, Get, Inject, Query } from '@midwayjs/decorator';
import { WeatherService } from '../service/weather.service';
import { Context } from '@midwayjs/koa';
@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<void> {
    // return 'Hello Midwayjs!';
    await this.ctx.render('index');
  }
  @Inject()
  weatherService: WeatherService;
  @Inject()
  ctx: Context;
  @Get('/weather')
  async getWeatherInfo(@Query('cityId') cityId: string): Promise<void> {
    // 这里是 http 的返回，可以直接返回字符串，数字，JSON，Buffer 等
    const result = await this.weatherService.getWeather(cityId);
    if (result) {
      await this.ctx.render('info', result.weatherinfo);
    }
  }
}
