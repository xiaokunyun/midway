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
exports.UserService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("@midwayjs/typeorm");
const photo_1 = require("../entity/photo");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    async getUser(options) {
        return {
            uid: options.uid,
            username: 'mockedName',
            phone: '12345678901',
            email: 'xxx.xxx@xxx.com',
        };
    }
    // save
    async savePhoto() {
        const photo = new photo_1.Photo();
        photo.name = 'Me and Bears';
        photo.description = 'I am near polar bears';
        photo.filename = 'photo-with-bears.jpg';
        photo.views = 1;
        photo.isPublished = true;
        // save entity
        const photoResult = await this.photoModel.save(photo);
        // save success
        console.log('photo id = ', photoResult.id);
    }
};
__decorate([
    (0, typeorm_1.InjectEntityModel)(photo_1.Photo),
    __metadata("design:type", typeorm_2.Repository)
], UserService.prototype, "photoModel", void 0);
UserService = __decorate([
    (0, decorator_1.Provide)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3h1eGlhb2t1bi9EZXNrdG9wL0FLVU4vZ2l0L21pZHdheS9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFFOUMsK0NBQXNEO0FBQ3RELDJDQUF3QztBQUN4QyxxQ0FBcUM7QUFFckMsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDLE9BQXFCO1FBQ2pDLE9BQU87WUFDTCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDaEIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsS0FBSyxFQUFFLGFBQWE7WUFDcEIsS0FBSyxFQUFFLGlCQUFpQjtTQUN6QixDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU87SUFDUCxLQUFLLENBQUMsU0FBUztRQUNiLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDNUIsS0FBSyxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztRQUM1QyxLQUFLLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQ3hDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGNBQWM7UUFDZCxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELGVBQWU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGLENBQUE7QUFkMkI7SUFBekIsSUFBQSwyQkFBaUIsRUFBQyxhQUFLLENBQUM7OEJBQWEsb0JBQVU7K0NBQVE7QUFUN0MsV0FBVztJQUR2QixJQUFBLG1CQUFPLEdBQUU7R0FDRyxXQUFXLENBdUJ2QjtBQXZCWSxrQ0FBVyJ9