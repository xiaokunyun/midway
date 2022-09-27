import { WeatherService } from '../service/weather.service';
import { Context } from '@midwayjs/koa';
export declare class HomeController {
    home(): Promise<void>;
    weatherService: WeatherService;
    ctx: Context;
    getWeatherInfo(cityId: string): Promise<void>;
}
