"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherEmptyDataError = void 0;
// src/error/weather.error.ts
const core_1 = require("@midwayjs/core");
class WeatherEmptyDataError extends core_1.MidwayError {
    constructor(err) {
        super('weather data is empty', {
            cause: err,
        });
        if (err === null || err === void 0 ? void 0 : err.stack) {
            this.stack = err.stack;
        }
    }
}
exports.WeatherEmptyDataError = WeatherEmptyDataError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5lcnJvci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy94dXhpYW9rdW4vRGVza3RvcC9BS1VOL2dpdC9taWR3YXkvc3JjLyIsInNvdXJjZXMiOlsiZXJyb3Ivd2VhdGhlci5lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBNkI7QUFDN0IseUNBQTZDO0FBRTdDLE1BQWEscUJBQXNCLFNBQVEsa0JBQVc7SUFDcEQsWUFBWSxHQUFXO1FBQ3JCLEtBQUssQ0FBQyx1QkFBdUIsRUFBRTtZQUM3QixLQUFLLEVBQUUsR0FBRztTQUNYLENBQUMsQ0FBQztRQUNILElBQUksR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7Q0FDRjtBQVRELHNEQVNDIn0=