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
exports.Photo = void 0;
// entity/photo.ts
const typeorm_1 = require("typeorm");
let Photo = class Photo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Photo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100,
        name: 'custom_name',
    }),
    __metadata("design:type", String)
], Photo.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Photo.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Photo.prototype, "filename", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], Photo.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Photo.prototype, "isPublished", void 0);
Photo = __decorate([
    (0, typeorm_1.Entity)()
], Photo);
exports.Photo = Photo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG8uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMveHV4aWFva3VuL0Rlc2t0b3AvQUtVTi9naXQvbWlkd2F5L3NyYy8iLCJzb3VyY2VzIjpbImVudGl0eS9waG90by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxrQkFBa0I7QUFDbEIscUNBQWlFO0FBR2pFLElBQWEsS0FBSyxHQUFsQixNQUFhLEtBQUs7Q0FtQmpCLENBQUE7QUFqQkM7SUFEQyxJQUFBLGdDQUFzQixFQUFDLFdBQVcsQ0FBQzs7aUNBQ3pCO0FBS1g7SUFKQyxJQUFBLGdCQUFNLEVBQUM7UUFDTixNQUFNLEVBQUUsR0FBRztRQUNYLElBQUksRUFBRSxhQUFhO0tBQ3BCLENBQUM7O21DQUNXO0FBRWI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsTUFBTSxDQUFDOzswQ0FDSztBQUdwQjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7dUNBQ1E7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsUUFBUSxDQUFDOztvQ0FDSDtBQUdkO0lBREMsSUFBQSxnQkFBTSxHQUFFOzswQ0FDWTtBQWxCVixLQUFLO0lBRGpCLElBQUEsZ0JBQU0sR0FBRTtHQUNJLEtBQUssQ0FtQmpCO0FBbkJZLHNCQUFLIn0=