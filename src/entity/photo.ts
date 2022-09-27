// entity/photo.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({
    length: 100,
    name: 'custom_name',
  })
  name: string;
  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('double')
  views: number;

  @Column()
  isPublished: boolean;
}
