import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('visitors')
export class Visitor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthday: Date;

  // TODO: Relations

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at;

  @DeleteDateColumn()
  deleted_at;
}
