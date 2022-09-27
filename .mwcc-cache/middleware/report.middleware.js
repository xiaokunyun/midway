"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMiddleware = void 0;
const decorator_1 = require("@midwayjs/decorator");
let ReportMiddleware = class ReportMiddleware {
    resolve() {
        return async (ctx, next) => {
            // 控制器前执行的逻辑
            const startTime = Date.now();
            // 执行下一个 Web 中间件，最后执行到控制器
            // 这里可以拿到下一个中间件或者控制器的返回值
            const result = await next();
            // 控制器之后执行的逻辑
            ctx.logger.info(`Report in "src/middleware/report.middleware.ts", rt = ${Date.now() - startTime}ms`);
            // 返回给上一个中间件的结果
            return result;
        };
    }
    static getName() {
        return 'report';
    }
};
ReportMiddleware = __decorate([
    (0, decorator_1.Middleware)()
], ReportMiddleware);
exports.ReportMiddleware = ReportMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMveHV4aWFva3VuL0Rlc2t0b3AvQUtVTi9naXQvbWlkd2F5L3NyYy8iLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvcmVwb3J0Lm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsbURBQWlEO0FBSWpELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLE9BQU87UUFDTCxPQUFPLEtBQUssRUFBRSxHQUFZLEVBQUUsSUFBa0IsRUFBRSxFQUFFO1lBQ2hELFlBQVk7WUFDWixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IseUJBQXlCO1lBQ3pCLHdCQUF3QjtZQUN4QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1lBQzVCLGFBQWE7WUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDYix5REFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsU0FDZixJQUFJLENBQ0wsQ0FBQztZQUNGLGVBQWU7WUFDZixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0YsQ0FBQTtBQXRCWSxnQkFBZ0I7SUFENUIsSUFBQSxzQkFBVSxHQUFFO0dBQ0EsZ0JBQWdCLENBc0I1QjtBQXRCWSw0Q0FBZ0IifQ==