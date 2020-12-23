import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VisitorEntity } from './visitor.entity';

@Entity('types')
export class VisitorTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  title: string;

  @ManyToMany(() => VisitorEntity, (visitor) => visitor.types, {
    nullable: true,
  })
  @JoinTable({ name: 'visitor_types_types' })
  visitors: VisitorEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
