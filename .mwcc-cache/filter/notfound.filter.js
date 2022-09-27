"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundFilter = void 0;
const decorator_1 = require("@midwayjs/decorator");
const core_1 = require("@midwayjs/core");
let NotFoundFilter = class NotFoundFilter {
    async catch(err, ctx) {
        // 404 错误会到这里
        ctx.redirect('/404.html');
    }
};
NotFoundFilter = __decorate([
    (0, decorator_1.Catch)(core_1.httpError.NotFoundError)
], NotFoundFilter);
exports.NotFoundFilter = NotFoundFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90Zm91bmQuZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3h1eGlhb2t1bi9EZXNrdG9wL0FLVU4vZ2l0L21pZHdheS9zcmMvIiwic291cmNlcyI6WyJmaWx0ZXIvbm90Zm91bmQuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1EQUE0QztBQUM1Qyx5Q0FBNEQ7QUFJNUQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQW9CLEVBQUUsR0FBWTtRQUM1QyxhQUFhO1FBQ2IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQUxZLGNBQWM7SUFEMUIsSUFBQSxpQkFBSyxFQUFDLGdCQUFTLENBQUMsYUFBYSxDQUFDO0dBQ2xCLGNBQWMsQ0FLMUI7QUFMWSx3Q0FBYyJ9