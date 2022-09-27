"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultErrorFilter = void 0;
const decorator_1 = require("@midwayjs/decorator");
let DefaultErrorFilter = class DefaultErrorFilter {
    async catch(err, ctx) {
        // 所有的未分类错误会到这里
        return {
            success: false,
            message: err.message,
        };
    }
};
DefaultErrorFilter = __decorate([
    (0, decorator_1.Catch)()
], DefaultErrorFilter);
exports.DefaultErrorFilter = DefaultErrorFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5maWx0ZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMveHV4aWFva3VuL0Rlc2t0b3AvQUtVTi9naXQvbWlkd2F5L3NyYy8iLCJzb3VyY2VzIjpbImZpbHRlci9kZWZhdWx0LmZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtREFBNEM7QUFJNUMsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFVLEVBQUUsR0FBWTtRQUNsQyxlQUFlO1FBQ2YsT0FBTztZQUNMLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVJZLGtCQUFrQjtJQUQ5QixJQUFBLGlCQUFLLEdBQUU7R0FDSyxrQkFBa0IsQ0FROUI7QUFSWSxnREFBa0IifQ==