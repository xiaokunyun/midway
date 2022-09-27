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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerLifeCycle = void 0;
const decorator_1 = require("@midwayjs/decorator");
const koa = require("@midwayjs/koa");
const validate = require("@midwayjs/validate");
const info = require("@midwayjs/info");
const orm = require("@midwayjs/typeorm");
const swagger = require("@midwayjs/swagger");
const view = require("@midwayjs/view-nunjucks");
// import { IMidwayContainer } from '@midwayjs/core';
// import * as jwt from '@midwayjs/jwt';
const path_1 = require("path");
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
const report_middleware_1 = require("./middleware/report.middleware");
const weather_filter_1 = require("./filter/weather.filter");
let ContainerLifeCycle = class ContainerLifeCycle {
    async onReady() {
        // add middleware
        this.app.useMiddleware([report_middleware_1.ReportMiddleware]);
        // add filter
        // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
        this.app.useFilter([weather_filter_1.WeatherErrorFilter]);
    }
};
__decorate([
    (0, decorator_1.App)(),
    __metadata("design:type", Object)
], ContainerLifeCycle.prototype, "app", void 0);
ContainerLifeCycle = __decorate([
    (0, decorator_1.Configuration)({
        imports: [
            koa,
            validate,
            {
                component: info,
                enabledEnvironment: ['local'],
            },
            view,
            orm,
            swagger,
            {
                component: swagger,
                enabledEnvironment: ['local'],
            },
            // jwt,
        ],
        importConfigs: [(0, path_1.join)(__dirname, './config')],
    })
], ContainerLifeCycle);
exports.ContainerLifeCycle = ContainerLifeCycle;
// export class MainConfiguration {
//   @App()
//   app: koa.Application;
//   async onReady(applicationContext: IMidwayContainer): Promise<void> {
//     // 添加中间件
//     this.app.useMiddleware([
//       // ...
//       JwtMiddleware,
//     ]);
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy94dXhpYW9rdW4vRGVza3RvcC9BS1VOL2dpdC9taWR3YXkvc3JjLyIsInNvdXJjZXMiOlsiY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBeUQ7QUFDekQscUNBQXFDO0FBQ3JDLCtDQUErQztBQUMvQyx1Q0FBdUM7QUFDdkMseUNBQXlDO0FBQ3pDLDZDQUE2QztBQUM3QyxnREFBZ0Q7QUFDaEQscURBQXFEO0FBQ3JELHdDQUF3QztBQUN4QywrQkFBNEI7QUFDNUIsZ0VBQWdFO0FBQ2hFLDZEQUE2RDtBQUM3RCxzRUFBa0U7QUFDbEUsNERBQTZEO0FBb0I3RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUc3QixLQUFLLENBQUMsT0FBTztRQUNYLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLG9DQUFnQixDQUFDLENBQUMsQ0FBQztRQUMzQyxhQUFhO1FBQ2IsNERBQTREO1FBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsbUNBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRixDQUFBO0FBUkM7SUFEQyxJQUFBLGVBQUcsR0FBRTs7K0NBQ2U7QUFGVixrQkFBa0I7SUFuQjlCLElBQUEseUJBQWEsRUFBQztRQUNiLE9BQU8sRUFBRTtZQUNQLEdBQUc7WUFDSCxRQUFRO1lBQ1I7Z0JBQ0UsU0FBUyxFQUFFLElBQUk7Z0JBQ2Ysa0JBQWtCLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDOUI7WUFDRCxJQUFJO1lBQ0osR0FBRztZQUNILE9BQU87WUFDUDtnQkFDRSxTQUFTLEVBQUUsT0FBTztnQkFDbEIsa0JBQWtCLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDOUI7WUFDRCxPQUFPO1NBQ1I7UUFDRCxhQUFhLEVBQUUsQ0FBQyxJQUFBLFdBQUksRUFBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDN0MsQ0FBQztHQUNXLGtCQUFrQixDQVU5QjtBQVZZLGdEQUFrQjtBQVcvQixtQ0FBbUM7QUFDbkMsV0FBVztBQUNYLDBCQUEwQjtBQUMxQix5RUFBeUU7QUFDekUsZUFBZTtBQUNmLCtCQUErQjtBQUMvQixlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLFVBQVU7QUFDVixNQUFNO0FBQ04sSUFBSSJ9