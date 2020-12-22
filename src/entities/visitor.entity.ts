import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { VisitEntity } from './visit.entity';
import { GroupEntity } from './group.entity';

@Entity('visitors')
export class VisitorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthday: Date;

  // TODO: Relations

  @OneToMany(() => VisitEntity, (visit) => visit.visitor)
  visits: VisitEntity[];

  @ManyToOne(() => GroupEntity, (group) => group.visitors)
  group: GroupEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at;

  @DeleteDateColumn()
  deleted_at;
}
