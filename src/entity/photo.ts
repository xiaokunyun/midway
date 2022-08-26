// entity/photo.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Photo')
export class Photo {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({
    length: 100,
    name: 'custom_name',
  })
  name: string;
  @Column({ name: 'age' }) age: number;
  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('double')
  views: number;

  @Column()
  isPublished: boolean;
}
@Entity('UserModel')
export class UserModel {
  //声明主键
  @PrimaryGeneratedColumn('increment') id: number;
  //映射userName和user表中的user_name对应
  @Column({ name: 'user_name' }) userName: string;
  @Column({ name: 'age' }) age: number;
  @Column({ name: 'description' }) description: string;
}
