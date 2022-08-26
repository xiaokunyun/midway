import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';

import { InjectEntityModel } from '@midwayjs/typeorm';
import { Photo, UserModel } from '../entity/photo';
import { Repository } from 'typeorm';
@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
  @InjectEntityModel(Photo) photoModel: Repository<Photo>;
  // save
  async savePhoto() {
    // create a entity object
    const photo = new Photo();
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
  @InjectEntityModel(UserModel) userModel: Repository<UserModel>;
  // save
  async addUser() {
    const record = new UserModel();
    record.userName = 'migor';
    record.age = 18;
    record.description = 'test';
    const created = await this.userModel.save(record);
    console.log('record id = ', created.id);
  }
}
