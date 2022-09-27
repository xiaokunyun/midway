import { WeatherInfo } from '../interface';
export declare class WeatherService {
    getWeather(cityId: string): Promise<WeatherInfo>;
}
