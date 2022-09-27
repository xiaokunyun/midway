"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherErrorFilter = void 0;
//src/filter/weather.filter.ts
const decorator_1 = require("@midwayjs/decorator");
const weather_error_1 = require("../error/weather.error");
let WeatherErrorFilter = class WeatherErrorFilter {
    async catch(err, ctx) {
        ctx.logger.error(err);
        return '<html><body><h1>weather data is empty</h1></body></html>';
    }
};
WeatherErrorFilter = __decorate([
    (0, decorator_1.Catch)(weather_error_1.WeatherEmptyDataError)
], WeatherErrorFilter);
exports.WeatherErrorFilter = WeatherErrorFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5maWx0ZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMveHV4aWFva3VuL0Rlc2t0b3AvQUtVTi9naXQvbWlkd2F5L3NyYy8iLCJzb3VyY2VzIjpbImZpbHRlci93ZWF0aGVyLmZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4QkFBOEI7QUFDOUIsbURBQTRDO0FBRTVDLDBEQUErRDtBQUcvRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQTBCLEVBQUUsR0FBWTtRQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLDBEQUEwRCxDQUFDO0lBQ3BFLENBQUM7Q0FDRixDQUFBO0FBTFksa0JBQWtCO0lBRDlCLElBQUEsaUJBQUssRUFBQyxxQ0FBcUIsQ0FBQztHQUNoQixrQkFBa0IsQ0FLOUI7QUFMWSxnREFBa0IifQ==