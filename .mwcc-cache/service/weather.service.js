"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
// src/service/weather.service.ts
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@midwayjs/core");
const weather_error_1 = require("../error/weather.error");
let WeatherService = class WeatherService {
    async getWeather(cityId) {
        if (!cityId) {
            throw new weather_error_1.WeatherEmptyDataError();
        }
        try {
            const result = await (0, core_1.makeHttpRequest)(`http://www.weather.com.cn/data/sk/${cityId}.html`, {
                dataType: 'json',
            });
            if (result.status === 200) {
                return result.data;
            }
        }
        catch (error) {
            throw new weather_error_1.WeatherEmptyDataError(error);
        }
    }
};
WeatherService = __decorate([
    (0, decorator_1.Provide)()
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3h1eGlhb2t1bi9EZXNrdG9wL0FLVU4vZ2l0L21pZHdheS9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3dlYXRoZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsbURBQThDO0FBQzlDLHlDQUFpRDtBQUVqRCwwREFBK0Q7QUFFL0QsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUN6QixLQUFLLENBQUMsVUFBVSxDQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSxxQ0FBcUIsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxzQkFBZSxFQUNsQyxxQ0FBcUMsTUFBTSxPQUFPLEVBQ2xEO2dCQUNFLFFBQVEsRUFBRSxNQUFNO2FBQ2pCLENBQ0YsQ0FBQztZQUNGLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3pCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQzthQUNwQjtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLElBQUkscUNBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQW5CWSxjQUFjO0lBRDFCLElBQUEsbUJBQU8sR0FBRTtHQUNHLGNBQWMsQ0FtQjFCO0FBbkJZLHdDQUFjIn0=