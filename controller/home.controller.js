"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const weather_service_1 = require("../service/weather.service");
let HomeController = class HomeController {
    async home() {
        // return 'Hello Midwayjs!';
        await this.ctx.render('index');
    }
    async getWeatherInfo(cityId) {
        // 这里是 http 的返回，可以直接返回字符串，数字，JSON，Buffer 等
        const result = await this.weatherService.getWeather(cityId);
        if (result) {
            await this.ctx.render('info', result.weatherinfo);
        }
    }
};
__decorate([
    (0, decorator_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "home", null);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", weather_service_1.WeatherService)
], HomeController.prototype, "weatherService", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], HomeController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Get)('/weather'),
    __param(0, (0, decorator_1.Query)('cityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getWeatherInfo", null);
HomeController = __decorate([
    (0, decorator_1.Controller)('/')
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3h1eGlhb2t1bi9EZXNrdG9wL0FLVU4vZ2l0L21pZHdheS9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL2hvbWUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBcUU7QUFDckUsZ0VBQTREO0FBRzVELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFFekIsS0FBSyxDQUFDLElBQUk7UUFDUiw0QkFBNEI7UUFDNUIsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBTUQsS0FBSyxDQUFDLGNBQWMsQ0FBa0IsTUFBYztRQUNsRCwwQ0FBMEM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Q0FDRixDQUFBO0FBaEJDO0lBREMsSUFBQSxlQUFHLEVBQUMsR0FBRyxDQUFDOzs7OzBDQUlSO0FBRUQ7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ08sZ0NBQWM7c0RBQUM7QUFFL0I7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OzJDQUNJO0FBRWI7SUFEQyxJQUFBLGVBQUcsRUFBQyxVQUFVLENBQUM7SUFDTSxXQUFBLElBQUEsaUJBQUssRUFBQyxRQUFRLENBQUMsQ0FBQTs7OztvREFNcEM7QUFqQlUsY0FBYztJQUQxQixJQUFBLHNCQUFVLEVBQUMsR0FBRyxDQUFDO0dBQ0gsY0FBYyxDQWtCMUI7QUFsQlksd0NBQWMifQ==