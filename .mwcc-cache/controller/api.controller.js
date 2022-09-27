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
exports.APIController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const user_service_1 = require("../service/user.service");
let APIController = class APIController {
    async getUser(uid) {
        const user = await this.userService.getUser({ uid });
        return { success: true, message: 'OK', data: user };
    }
    async login(uid) {
        const user = await this.userService.getUser({ uid });
        return { success: true, message: 'OK', data: user };
    }
};
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", Object)
], APIController.prototype, "ctx", void 0);
__decorate([
    (0, decorator_1.Inject)(),
    __metadata("design:type", user_service_1.UserService)
], APIController.prototype, "userService", void 0);
__decorate([
    (0, decorator_1.Get)('/get_user'),
    __param(0, (0, decorator_1.Query)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], APIController.prototype, "getUser", null);
__decorate([
    (0, decorator_1.Get)('/sys/login'),
    __param(0, (0, decorator_1.Query)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], APIController.prototype, "login", null);
APIController = __decorate([
    (0, decorator_1.Controller)('/api')
], APIController);
exports.APIController = APIController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMveHV4aWFva3VuL0Rlc2t0b3AvQUtVTi9naXQvbWlkd2F5L3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvYXBpLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXFFO0FBRXJFLDBEQUFzRDtBQUd0RCxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBUXhCLEtBQUssQ0FBQyxPQUFPLENBQWUsR0FBRztRQUM3QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUssQ0FBZSxHQUFHO1FBQzNCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7Q0FDRixDQUFBO0FBZkM7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OzBDQUNJO0FBR2I7SUFEQyxJQUFBLGtCQUFNLEdBQUU7OEJBQ0ksMEJBQVc7a0RBQUM7QUFHekI7SUFEQyxJQUFBLGVBQUcsRUFBQyxXQUFXLENBQUM7SUFDRixXQUFBLElBQUEsaUJBQUssRUFBQyxLQUFLLENBQUMsQ0FBQTs7Ozs0Q0FHMUI7QUFFRDtJQURDLElBQUEsZUFBRyxFQUFDLFlBQVksQ0FBQztJQUNMLFdBQUEsSUFBQSxpQkFBSyxFQUFDLEtBQUssQ0FBQyxDQUFBOzs7OzBDQUd4QjtBQWhCVSxhQUFhO0lBRHpCLElBQUEsc0JBQVUsRUFBQyxNQUFNLENBQUM7R0FDTixhQUFhLENBaUJ6QjtBQWpCWSxzQ0FBYSJ9