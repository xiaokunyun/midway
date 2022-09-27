import { IUserOptions } from '../interface';
import { Photo } from '../entity/photo';
import { Repository } from 'typeorm';
export declare class UserService {
    getUser(options: IUserOptions): Promise<{
        uid: number;
        username: string;
        phone: string;
        email: string;
    }>;
    photoModel: Repository<Photo>;
    savePhoto(): Promise<void>;
}
