import { Context } from '@midwayjs/koa';
import { WeatherEmptyDataError } from '../error/weather.error';
export declare class WeatherErrorFilter {
    catch(err: WeatherEmptyDataError, ctx: Context): Promise<string>;
}
